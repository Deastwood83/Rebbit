"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var passport_1 = __importDefault(require("passport"));
var auth_1 = __importDefault(require("../controllers/auth"));
var authRouter = (0, express_1.Router)();
authRouter.post('/login', passport_1["default"].authenticate('local'), function (req, res) {
    return res.status(200).json(req.user);
});
authRouter.post('/register', auth_1["default"].register);
authRouter.post('/signout', auth_1["default"].signout);
authRouter.put('/me', auth_1["default"].updateMe);
authRouter.get('/status', function (req, res) {
    return req.user
        ? res.status(200).json(req.user)
        : res.status(401).json({
            message: 'Unauthorized'
        });
});
exports["default"] = authRouter;
