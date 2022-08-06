"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    biography: String
}, {
    timestamps: true
});
var UserModel = (0, mongoose_1.model)('User', userSchema);
exports["default"] = UserModel;
