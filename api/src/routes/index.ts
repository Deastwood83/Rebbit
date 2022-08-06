import { Router } from "express";
import authMiddleware from "../middleware/auth";
import authRouter from "./auth";
import postsRouter from "./posts";
import usersRouter from './users';

const mainRouter = Router();

mainRouter.use('/auth', authRouter);
mainRouter.use('/posts', authMiddleware, postsRouter);
mainRouter.use('/users', authMiddleware, usersRouter);

export default mainRouter;
