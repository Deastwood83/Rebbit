const mongoose = require('mongoose');
const appConfig = require('./config');

const db = () => {
    return new Promise((res, rej) => {
        mongoose.connect(appConfig.mongoDbUri, (err) => {
            if (err) return rej(err);

            console.log('MongoDB connected');
            res();
        });
    });
};

module.exports = db;
