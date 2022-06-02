const { Router } = require('express');

const usersRouter = Router();

usersRouter.get('/');
usersRouter.get('/:id');
usersRouter.put('/:id');
usersRouter.delete('/:id');

module.exports = usersRouter;
