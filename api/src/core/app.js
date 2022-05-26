const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('./passport');
const db = require('./db');
const appConfig = require('./config');
const { default: mongoose } = require('mongoose');
const mainRouter = require('../routes');

/**
 *
 * @returns {express.Express}
 */
const app = async () => {
    const app = express();

    await db();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(
        session({
            secret: appConfig.secret,
            resave: false,
            saveUninitialized: false,
            store: MongoStore.create({
                client: mongoose.connection.getClient(),
            }),
        })
    );

    app.use(passport.initialize());
    app.use(passport.session());

    app.use('/api', mainRouter);

    return app;
};

module.exports = app;
