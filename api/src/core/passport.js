const passport = require('passport');
const { Strategy } = require('passport-local');
const bcrpyt = require('bcryptjs');
const User = require('../models/User');

passport.serializeUser((user, done) => {
    return done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id).select('-password');
        if (!user) {
            return done(null, false);
        }

        return done(null, user);
    } catch (err) {
        return done(err);
    }
});

passport.use(
    new Strategy(
        {
            usernameField: 'username',
            passwordField: 'password',
        },
        async (usernmae, password, done) => {
            try {
                const user = await User.findOne({
                    username: usernmae,
                });

                if (!user) {
                    return done(null, false);
                }

                const isMatch = await bcrpyt.compare(password, user.password);

                if (!isMatch) {
                    return done(null, false);
                }

                return done(null, user);
            } catch (err) {
                return done(err);
            }
        }
    )
);

module.exports = passport;
