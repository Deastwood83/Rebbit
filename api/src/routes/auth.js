const { Router } = require('express');
const passport = require('passport');
const appConfig = require('../core/config');
const authController = require('../controllers/auth');

const authRouter = Router();

authRouter.post('/login', passport.authenticate('local'), (req, res) => {
    return res.status(200).json({
        message: 'Login successful',
        user: req.user,
    });
});

authRouter.post('/register', authController.register);

authRouter.get('/status', (req, res) => {
    return req.user
        ? res.status(200).json(req.user)
        : res.status(401).json({
              message: 'Unauthorized',
          });
});

module.exports = authRouter;
