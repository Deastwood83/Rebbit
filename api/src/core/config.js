require('dotenv').config();

const appConfig = {
    port: process.env.PORT || 4000,
    secret: process.env.SECRET || 'secret',
    mongoDbUri: process.env.MONGO_DB_URI || 'mongodb://localhost:27017/rebbit',
    clientUrl: process.env.CLIENT_URL || 'http://localhost:3000',
};

module.exports = appConfig;
