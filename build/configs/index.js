"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = exports.configs = void 0;
const client_1 = require("@prisma/client");
const dotenv_1 = require("dotenv");
const prisma = new client_1.PrismaClient();
exports.prisma = prisma;
(0, dotenv_1.config)();
const configs = {
    PORT: process.env.PORT,
    API_VERSION: `api/v1`,
    HOST: `${process.env.HOST}`,
    USER_PASSWORD: `${process.env.USER_PASSWORD}`,
    JWT_SECRET: `${process.env.JWT_SECRET}`,
    MAIL_USER: `${process.env.MAIL_USER}`,
    MAIL_PASS: `${process.env.MAIL_PASS}`,
    CLIENT_ID: `${process.env.CLIENT_ID}`,
    CLIENT_SECRET: `${process.env.CLIENT_SECRET}`,
    REDIRECT_URL: `${process.env.REDIRECT_URL}`
};
exports.configs = configs;
