import 'dotenv/config';

type AppConfig = {
    port: number;
    secret: string;
    mongoDbUri: string;
    clientUrl: string;
}

const appConfig: AppConfig = {
    port: Number(process.env.PORT) || 4000,
    secret: process.env.SECRET || 'secret',
    mongoDbUri: process.env.MONGO_DB_URI || 'mongodb://localhost:27017/rebbit',
    clientUrl: process.env.CLIENT_URL || 'http://localhost:3000',
};

export default appConfig;
