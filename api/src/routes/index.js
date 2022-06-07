const { Router } = require("express");
const authRouter = require("./auth");
const PostRouter = require("./Post");

const mainRouter = Router();

mainRouter.use("/auth", authRouter);
mainRouter.use("/posts", PostRouter);

module.exports = mainRouter;
