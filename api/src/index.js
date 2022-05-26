const app = require('./core/app');

async function main() {
    const api = app();

    return api.listen(4000, () => {
        console.log('Server started on port 4000');
    });
}

main();
