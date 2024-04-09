"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commonValidation = void 0;
const express_validator_1 = require("express-validator");
exports.commonValidation = [
    (0, express_validator_1.query)("perPage")
        .optional({ nullable: true })
        .isNumeric()
        .withMessage("Please provide a valid number for 'per page'.")
        .custom((value, { req }) => {
        if (parseInt(value) > 0)
            return true;
        else
            return false;
    })
        .withMessage("'Per page' must be greater than 0.")
        .toInt(),
    (0, express_validator_1.query)("pageNo")
        .optional({ nullable: true })
        .isNumeric()
        .withMessage("Please provide a valid number for 'page number'.")
        .custom((value) => {
        if (parseInt(value) < 0)
            return false;
        else
            return true;
    })
        .withMessage("'Page Number' must be greater than 0 or equals to 0.")
        .toInt(),
    (0, express_validator_1.query)("search")
        .optional({ nullable: true })
        .isString()
        .withMessage("Please provide a valid string for 'search'."),
    (0, express_validator_1.query)("descending")
        .optional({ nullable: true })
        .isBoolean()
        .withMessage("Please provide a valid boolean value for 'descending' (true).")
        .toBoolean(),
    (0, express_validator_1.query)("ascending")
        .optional({ nullable: true })
        .isBoolean()
        .withMessage("Please provide a valid boolean value for 'ascending' (true).")
        .toBoolean(),
];
