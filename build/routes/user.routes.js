"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validations_1 = require("../validations");
const middlewares_1 = require("../middlewares");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
router.post("/", validations_1.userValidation.create, middlewares_1.validate, controllers_1.userController.create);
router.post("/login", validations_1.userValidation.login, middlewares_1.validate, controllers_1.userController.login);
router.put("/change-password", middlewares_1.authenticate.allUser, validations_1.userValidation.changePassword, middlewares_1.validate, controllers_1.userController.changePassword);
router.put("/:id", middlewares_1.authenticate.allUser, validations_1.userValidation.update, middlewares_1.validate, controllers_1.userController.update);
router.get("/self", middlewares_1.authenticate.allUser, controllers_1.userController.self);
exports.default = router;