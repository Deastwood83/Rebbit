"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var auth_1 = __importDefault(require("../middleware/auth"));
var auth_2 = __importDefault(require("./auth"));
var posts_1 = __importDefault(require("./posts"));
var users_1 = __importDefault(require("./users"));
var mainRouter = (0, express_1.Router)();
mainRouter.use('/auth', auth_2["default"]);
mainRouter.use('/posts', auth_1["default"], posts_1["default"]);
mainRouter.use('/users', auth_1["default"], users_1["default"]);
exports["default"] = mainRouter;
