import app from './core/app';
import appConfig from './core/config';

declare global {
    namespace Express {
        interface User {
            _id: string;
            username: string;
            email: string;
        }
    }
}


async function main() {
    const api = await app();

    return api.listen(appConfig.port, () => {
        console.log(
            `Server started on port ${appConfig.port} (http://localhost:${appConfig.port})`
        );
    });
}

main();
