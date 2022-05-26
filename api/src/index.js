const app = require('./core/app');
const appConfig = require('./core/config');

async function main() {
    const api = await app();

    return api.listen(appConfig.port, () => {
        console.log(
            `Server started on port ${appConfig.port} (http://localhost:${appConfig.port})`
        );
    });
}

main();
