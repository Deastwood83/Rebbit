import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcryptjs';
import UserModel from '../models/User';


passport.serializeUser((user, done) => {
    return done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await UserModel.findById(id).select('-password').lean();
        if (!user) {
            return done(null, false);
        }

        return done(null, {
            _id: user._id.toString(),
            username: user.username,
            email: user.email,
        });
    } catch (err) {
        return done(err);
    }
});

passport.use(
    new LocalStrategy(
        {
            usernameField: 'username',
            passwordField: 'password',
        },
        async (usernmae, password, done) => {
            try {
                const user = await UserModel.findOne({
                    username: usernmae,
                });

                if (!user) {
                    return done(null, false);
                }

                const isMatch = await bcrypt.compare(password, user.password);

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

export default passport;