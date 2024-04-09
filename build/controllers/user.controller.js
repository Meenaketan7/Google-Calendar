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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const services_1 = require("../services");
exports.userController = {
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _a = yield services_1.userService.createUser(req.body), { otpExpire, otp, password } = _a, rest = __rest(_a, ["otpExpire", "otp", "password"]);
                res.json({
                    data: Object.assign({}, rest),
                    success: true,
                    message: `Registration was successful. Thank you for signing up.`,
                });
            }
            catch (error) {
                next(error);
            }
        });
    },
    login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data, token } = yield services_1.userService.loginUser(req.body);
                const { password } = data, rest = __rest(data, ["password"]);
                res.json({
                    success: true,
                    message: `Login successful`,
                    data: {
                        token,
                        user: rest,
                    },
                });
            }
            catch (error) {
                next(error);
            }
        });
    },
    changePassword(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.id;
                const { oldPassword, newPassword } = req.body;
                yield services_1.userService.changeUserPassword({
                    userId: userId,
                    oldPassword: oldPassword,
                    newPassword: newPassword,
                });
                res.json({
                    success: true,
                    message: `Password changed successfully`,
                });
            }
            catch (error) {
                next(error);
            }
        });
    },
    self(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
                const user = yield services_1.userService.selfData(userId);
                res.json({
                    success: true,
                    data: user,
                });
            }
            catch (error) {
                next(error);
            }
        });
    },
    update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield services_1.userService.updateUser(req.body, id);
                res.json({
                    success: true,
                    message: `Account updated successfully`,
                });
            }
            catch (error) {
                next(error);
            }
        });
    },
};
