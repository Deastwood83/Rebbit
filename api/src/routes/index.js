const { Router } = require('express');
const authMiddleware = require('../middleware/auth');
const authRouter = require('./auth');
const PostRouter = require('./Post');
const usersRouter = require('./users');

const mainRouter = Router();

mainRouter.use('/auth', authRouter);
mainRouter.use('/posts', authMiddleware, PostRouter);
mainRouter.use('/users', authMiddleware, usersRouter);

module.exports = mainRouter;
