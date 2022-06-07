const { Router } = require("express");
const postCommentController = require("../controllers/Post-comment");

const PostRouter = Router();

PostRouter.get("/", postCommentController.GetAllPosts);

PostRouter.get("/comments", postCommentController.GetAllComments);

PostRouter.get("/:id", postCommentController.GetPostById);

PostRouter.get("/comments/:id", postCommentController.GetCommentById);

module.exports = PostRouter;
