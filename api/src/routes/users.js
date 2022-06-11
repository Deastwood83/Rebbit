const { Router } = require('express');
const usersController = require('../controllers/users');

const usersRouter = Router();

usersRouter.get('/', usersController.getAll);
usersRouter.get('/:id', usersController.getBydId);
usersRouter.put('/:id', usersController.updateUser);

module.exports = usersRouter;
