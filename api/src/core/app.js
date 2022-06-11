const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const morgan = require('morgan');
const cors = require('cors');
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

    // Await for database connection
    await db();

    app.disable('x-powered-by');

    // Parsing Middlewares
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // Request Logging Middleware
    app.use(morgan('dev'));

    // CORS Middleware
    app.use(
        cors({
            origin: appConfig.clientUrl,
            credentials: true,
        })
    );

    // Session Middleware
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

    // Passport Middleware
    app.use(passport.initialize());
    app.use(passport.session());

    // Routes
    app.use('/api', mainRouter);
    return app;
};

module.exports = app;
