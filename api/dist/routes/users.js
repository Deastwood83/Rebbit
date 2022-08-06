"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var users_1 = __importDefault(require("../controllers/users"));
var usersRouter = (0, express_1.Router)();
usersRouter.get('/', users_1["default"].getAll);
usersRouter.get('/username/:username', users_1["default"].getByUsername);
usersRouter.get('/:id', users_1["default"].getBydId);
exports["default"] = usersRouter;
