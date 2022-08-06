"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var posts_1 = __importDefault(require("../controllers/posts"));
var postsRouter = (0, express_1.Router)();
postsRouter.get('/', posts_1["default"].getPosts);
postsRouter.post('/', posts_1["default"].createPost);
postsRouter.get('/:id', posts_1["default"].getPost);
postsRouter.put('/:id', posts_1["default"].updatePost);
postsRouter["delete"]('/:id', posts_1["default"].deletePost);
exports["default"] = postsRouter;
