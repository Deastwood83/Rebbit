"use strict";
exports.__esModule = true;
require("dotenv/config");
var appConfig = {
    port: Number(process.env.PORT) || 4000,
    secret: process.env.SECRET || 'secret',
    mongoDbUri: process.env.MONGO_DB_URI || 'mongodb://localhost:27017/rebbit',
    clientUrl: process.env.CLIENT_URL || 'http://localhost:3000'
};
exports["default"] = appConfig;
