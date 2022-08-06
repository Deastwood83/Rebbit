import { Router } from "express";
import usersController from "../controllers/users";

const usersRouter = Router();

usersRouter.get('/', usersController.getAll);
usersRouter.get('/username/:username', usersController.getByUsername);
usersRouter.get('/:id', usersController.getBydId);

export default usersRouter;
