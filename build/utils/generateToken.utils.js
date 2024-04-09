"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUniqueToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const configs_1 = require("../configs");
const generateUniqueToken = (id, email, name, role) => {
    const payload = {
        id,
        email,
        name,
        role
    };
    const options = {
        expiresIn: "7d"
    };
    const token = jsonwebtoken_1.default.sign(payload, configs_1.configs.JWT_SECRET, options);
    return token;
};
exports.generateUniqueToken = generateUniqueToken;
