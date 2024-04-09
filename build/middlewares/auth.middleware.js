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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = exports.verifyToken = void 0;
const http_errors_1 = require("http-errors");
const configs_1 = require("../configs");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyToken = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader)
        throw new http_errors_1.Unauthorized("Authorization header is missing");
    const token = authorizationHeader.split(" ")[1];
    if (!token)
        throw new http_errors_1.Unauthorized("Token is missing");
    const decodedToken = jsonwebtoken_1.default.verify(token, configs_1.configs.JWT_SECRET);
    const user = yield configs_1.prisma.user.findUnique({
        where: { id: decodedToken.id },
    });
    if (!user)
        throw new http_errors_1.Unauthorized("User not found");
    return user;
});
exports.verifyToken = verifyToken;
exports.authenticate = {
    admin: (req, _res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield (0, exports.verifyToken)(req);
            if (user.role !== "admin")
                throw (0, http_errors_1.Unauthorized)("Unauthorized, You can't perform this action!");
            req.user = user;
            next();
        }
        catch (error) {
            next(error);
        }
    }),
    user: (req, _res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield (0, exports.verifyToken)(req);
            if (user.role !== "user")
                throw (0, http_errors_1.Unauthorized)("You can't perform this action!");
            req.user = user;
            next();
        }
        catch (error) {
            next(error);
        }
    }),
    allUser: (req, _res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield (0, exports.verifyToken)(req);
            if (!user.role)
                throw (0, http_errors_1.Unauthorized)("You can't perform this action!");
            req.user = user;
            next();
        }
        catch (error) {
            next(error);
        }
    }),
};
