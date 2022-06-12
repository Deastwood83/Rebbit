const { Router } = require('express');
const postCommentController = require('../controllers/Post-comment');

const PostRouter = Router();

PostRouter.get('/', postCommentController.GetAllPosts);

PostRouter.get('/:postId/comments', postCommentController.GetAllComments);

PostRouter.get('/:id', postCommentController.GetPostById);

PostRouter.put('/:id', postCommentController.updatePost);

PostRouter.get('/:postId/comments/:id', postCommentController.GetCommentById);

PostRouter.post('/', postCommentController.CreatePost);

PostRouter.post('/:postId/comments', postCommentController.CreateComment);

PostRouter.delete('/:id', postCommentController.DeletePost);

PostRouter.delete('/:postId/comments/:id', postCommentController.DeleteComment);

module.exports = PostRouter;
