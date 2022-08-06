"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var postSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
        min: 30
    },
    owner: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});
var PostModel = (0, mongoose_1.model)('Post', postSchema);
exports["default"] = PostModel;
