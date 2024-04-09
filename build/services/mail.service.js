"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailService = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const configs_1 = require("../configs");
const emailService = {
    sendMail(to, subject, html) {
        try {
            const transport = nodemailer_1.default.createTransport({
                // host: "smtp.zeptomail.in",
                // port: 587,
                service: 'Gmail',
                auth: {
                    user: `${configs_1.configs.MAIL_USER}`,
                    pass: `${configs_1.configs.MAIL_PASS}`,
                },
            });
            const mailOptions = {
                from: `"Example Team" <${configs_1.configs.MAIL_USER}>`,
                to,
                subject,
                html,
            };
            transport.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log("Successfully sent");
            });
        }
        catch (error) {
            throw error;
        }
    },
};
exports.emailService = emailService;
