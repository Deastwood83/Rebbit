const { Router } = require('express');
const passport = require('passport');
const authController = require('../controllers/auth');

const authRouter = Router();

authRouter.post('/login', passport.authenticate('local'), (req, res) => {
    return res.status(200).json(req.user);
});

authRouter.post('/register', authController.register);
authRouter.post('/signout', authController.signout);

authRouter.put('/me', authController.updateMe);

authRouter.get('/status', (req, res) => {
    return req.user
        ? res.status(200).json(req.user)
        : res.status(401).json({
              message: 'Unauthorized',
          });
});

module.exports = authRouter;
