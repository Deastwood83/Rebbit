const { Router } = require('express');
const usersController = require('../controllers/users');

const usersRouter = Router();

usersRouter.get('/', usersController.getAll);
usersRouter.get('/username/:username', usersController.getByUsername);
usersRouter.get('/:id', usersController.getBydId);

module.exports = usersRouter;
