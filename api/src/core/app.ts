import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import passport from './passport';
import db from './db';
import mainRouter from '../routes';
import appConfig from './config';

const app = async () => {
    const app = express();

    // Await for database connection
    await db();

    app.disable('x-powered-by');

    // Trust proxy
    app.set('trust proxy', 1);

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

export default app;
