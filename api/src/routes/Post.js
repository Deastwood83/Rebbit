const { Router } = require("express");
const postCommentController = require("../controllers/Post-comment");

const PostRouter = Router();

PostRouter.get("/", postCommentController.GetAllPosts);

PostRouter.get("/comments", postCommentController.GetAllComments);

PostRouter.get("/:id", postCommentController.GetPostById);

PostRouter.get("/comments/:id", postCommentController.GetCommentById);

PostRouter.post("/", postCommentController.CreatePost);

PostRouter.post("/comments", postCommentController.CreateComment);

PostRouter.delete("/:id", postCommentController.DeletePost);

PostRouter.delete("/comments/:id", postCommentController.DeleteComment);

module.exports = PostRouter;
