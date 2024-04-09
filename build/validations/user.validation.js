"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidation = void 0;
const client_1 = require("@prisma/client");
const express_validator_1 = require("express-validator");
exports.userValidation = {
    create: [
        (0, express_validator_1.body)("name")
            .trim()
            .notEmpty()
            .withMessage("Name is required")
            .bail()
            .isLength({ max: 255 })
            .withMessage("Name must be less than 255 characters"),
        (0, express_validator_1.body)("email")
            .trim()
            .notEmpty()
            .withMessage("Please provide a email")
            .bail()
            .isString()
            .withMessage("Email must be a string.")
            .isEmail()
            .withMessage("Invalid Email Id. Please provide a valid email"),
        (0, express_validator_1.body)("password")
            .trim()
            .notEmpty()
            .withMessage("Please provide a password.")
            .bail()
            .isString()
            .withMessage("Password must be a string")
            .isLength({ min: 6 })
            .withMessage("Password must be at least 6 characters long"),
        (0, express_validator_1.body)("role")
            .notEmpty()
            .withMessage("Please provide a Role")
            .bail()
            .isIn(Object.values(client_1.Role))
            .withMessage("Role must be one of ADMIN or USER"),
        (0, express_validator_1.body)("isVerified")
            .optional({ values: "null" })
            .isBoolean()
            .withMessage("isVerified must be a boolean value"),
        (0, express_validator_1.body)("isBlocked")
            .optional({ values: "null" })
            .isBoolean()
            .withMessage("isBlocked must be a boolean value"),
        (0, express_validator_1.body)("fcmToken.web")
            .optional({ values: "null" })
            .isString()
            .withMessage("FCM token (web) must be a string"),
        (0, express_validator_1.body)("fcmToken.android")
            .optional({ values: "null" })
            .isString()
            .withMessage("FCM token (android) must be a string"),
        (0, express_validator_1.body)("fcmToken.ios")
            .optional({ values: "null" })
            .isString()
            .withMessage("FCM token (iOS) must be a string"),
    ],
    login: [
        (0, express_validator_1.body)("email")
            .trim()
            .notEmpty()
            .withMessage("Please provide a Email Id")
            .bail()
            .isString()
            .withMessage("Email Id must be a string")
            .bail()
            .isEmail()
            .withMessage("Invalid Email Id"),
        (0, express_validator_1.body)("password")
            .trim()
            .notEmpty()
            .withMessage("Password is required")
            .bail()
            .isLength({ min: 8 })
            .withMessage("Password must be at least 6 characters long"),
    ],
    changePassword: [
        (0, express_validator_1.body)("oldPassword")
            .trim()
            .notEmpty()
            .withMessage("Old Password is required")
            .bail()
            .isString()
            .withMessage("Old Password must be a string")
            .isLength({ min: 6 })
            .withMessage("Old Password must be 6 characters long"),
        (0, express_validator_1.body)("newPassword")
            .trim()
            .notEmpty()
            .withMessage("New Password is required")
            .isString()
            .withMessage("New Password must be a string")
            .isLength({ min: 6 })
            .withMessage("New Password must be 6 characters long")
            .custom((val, { req }) => {
            var _a;
            if (val !== ((_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.oldPassword))
                return true;
            else
                return false;
        })
            .withMessage("Old Password and New Password can't be same"),
    ],
    update: [
        (0, express_validator_1.param)("id")
            .notEmpty()
            .withMessage("Please provide a User Id.")
            .bail()
            .isMongoId()
            .withMessage("Invalid User Id. It should be a valid MongoId."),
        (0, express_validator_1.body)("name")
            .optional({ values: "null" })
            .trim()
            .isLength({ max: 255 })
            .withMessage("Name must be less than 255 characters"),
        (0, express_validator_1.body)("isBlocked")
            .optional({ values: "null" })
            .trim()
            .isBoolean()
            .withMessage("Block Status must be a boolean")
            .toBoolean(),
        (0, express_validator_1.body)("role")
            .optional({ values: "null" })
            .isIn(Object.values(client_1.Role))
            .withMessage("Role must be one of ADMIN or USER"),
        (0, express_validator_1.body)("fcmToken.web")
            .optional({ values: "null" })
            .isString()
            .withMessage("FCM token (web) must be a string"),
        (0, express_validator_1.body)("avatar")
            .optional({ values: "null" })
            .isString()
            .withMessage("avatar must be a string"),
        (0, express_validator_1.body)("avatarPath")
            .optional({ values: "null" })
            .isString()
            .withMessage("avatar path must be a string"),
        (0, express_validator_1.body)("fcmToken.android")
            .optional({ values: "null" })
            .isString()
            .withMessage("FCM token (android) must be a string"),
        (0, express_validator_1.body)("fcmToken.ios")
            .optional({ values: "null" })
            .isString()
            .withMessage("FCM token (iOS) must be a string"),
    ],
};
