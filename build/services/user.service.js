"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const configs_1 = require("../configs");
const http_errors_1 = require("http-errors");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const utils_1 = require("../utils");
const createEvent_service_1 = require("./createEvent.service");
exports.userService = {
    createUser(inputData) {
        return __awaiter(this, void 0, void 0, function* () {
            const isEmailExists = yield configs_1.prisma.user.findFirst({
                where: {
                    email: inputData.email,
                },
            });
            if (isEmailExists)
                throw new http_errors_1.Conflict("Email already exists!");
            const { password, isVerified } = inputData, rest = __rest(inputData, ["password", "isVerified"]);
            const hashedPassword = yield bcryptjs_1.default.hash(password || configs_1.configs.USER_PASSWORD, 10);
            const user = yield configs_1.prisma.user.create({
                data: Object.assign(Object.assign({}, rest), { password: hashedPassword, isVerified: true }),
            });
            return user;
        });
    },
    loginUser(inputData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = inputData;
            const user = yield configs_1.prisma.user.findFirst({
                where: {
                    email: email,
                },
            });
            if (!user)
                throw new http_errors_1.NotFound("Invalid login attempt. User not found");
            if (user.isBlocked)
                throw new http_errors_1.Forbidden("You account has blocked.");
            if (!user.isVerified)
                throw new http_errors_1.NotAcceptable("Your email not verified yet");
            const isPasswordValid = yield bcryptjs_1.default.compare(password, user.password);
            if (!isPasswordValid)
                throw new http_errors_1.Unauthorized("Invalid password");
            const token = yield (0, utils_1.generateUniqueToken)(user.id, user.email, user.role, user.name);
            yield configs_1.prisma.user.update({
                where: { id: user.id },
                data: { lastLogin: new Date().toISOString() },
            });
            const event = yield (0, createEvent_service_1.createGoogleCalendarEvent)(user.name, user.email);
            console.log({ event });
            return {
                data: user,
                token,
            };
        });
    },
    changeUserPassword(_a) {
        return __awaiter(this, arguments, void 0, function* ({ userId, oldPassword, newPassword, }) {
            const user = yield configs_1.prisma.user.findFirst({
                where: {
                    id: userId,
                },
            });
            if (!user)
                throw new http_errors_1.NotFound("User not found.");
            const isPasswordValid = yield bcryptjs_1.default.compare(oldPassword, user.password);
            if (!isPasswordValid)
                throw new http_errors_1.Unauthorized("Incorrect password.");
            const hashedPassword = yield bcryptjs_1.default.hash(newPassword, 10);
            const updatePassword = yield configs_1.prisma.user.update({
                where: {
                    id: userId,
                },
                data: {
                    password: hashedPassword,
                },
            });
            return updatePassword;
        });
    },
    updateUser(inputData, id) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c;
            const isUserExist = yield configs_1.prisma.user.findUnique({
                where: {
                    id,
                },
            });
            if (!isUserExist)
                throw new http_errors_1.NotFound("User not found");
            const { fcmToken } = inputData, rest = __rest(inputData, ["fcmToken"]);
            const web = fcmToken === null || fcmToken === void 0 ? void 0 : fcmToken.web;
            const ios = fcmToken === null || fcmToken === void 0 ? void 0 : fcmToken.ios;
            const android = fcmToken === null || fcmToken === void 0 ? void 0 : fcmToken.android;
            const user = yield configs_1.prisma.user.update({
                where: { id },
                data: Object.assign(Object.assign({}, rest), { fcmToken: {
                        web: web || ((_a = isUserExist === null || isUserExist === void 0 ? void 0 : isUserExist.fcmToken) === null || _a === void 0 ? void 0 : _a.web),
                        ios: ios || ((_b = isUserExist === null || isUserExist === void 0 ? void 0 : isUserExist.fcmToken) === null || _b === void 0 ? void 0 : _b.ios),
                        android: android || ((_c = isUserExist === null || isUserExist === void 0 ? void 0 : isUserExist.fcmToken) === null || _c === void 0 ? void 0 : _c.android),
                    } }),
            });
            return user;
        });
    },
    selfData(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield configs_1.prisma.user.findUnique({
                where: {
                    id: id,
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    avatar: true,
                    avatarPath: true,
                    role: true,
                    isBlocked: true,
                    isVerified: true,
                    fcmToken: true,
                    lastLogin: true,
                    createdAt: true,
                    updatedAt: true,
                },
            });
            if (!user)
                throw new http_errors_1.NotFound("Account not found");
            return user;
        });
    },
};
