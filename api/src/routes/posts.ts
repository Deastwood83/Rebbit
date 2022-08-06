import { Router } from "express";
import postsController from "../controllers/posts";

const postsRouter = Router();

postsRouter.get('/', postsController.getPosts);
postsRouter.post('/', postsController.createPost);
postsRouter.get('/:id', postsController.getPost);
postsRouter.put('/:id', postsController.updatePost);
postsRouter.delete('/:id', postsController.deletePost);


export default postsRouter;