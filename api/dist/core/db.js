"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var mongoose_1 = __importDefault(require("mongoose"));
var config_1 = __importDefault(require("./config"));
var db = function () {
    return new Promise(function (res, rej) {
        mongoose_1["default"].connect(config_1["default"].mongoDbUri, function (err) {
            if (err)
                return rej(err);
            console.log('MongoDB connected');
            res();
        });
    });
};
exports["default"] = db;
