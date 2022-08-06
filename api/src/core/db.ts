import mongoose from "mongoose";
import appConfig from "./config";

const db = (): Promise<void> => {
    return new Promise((res, rej) => {
        mongoose.connect(appConfig.mongoDbUri, (err) => {
            if (err) return rej(err);

            console.log('MongoDB connected');
            res();
        });
    });
};

export default db;