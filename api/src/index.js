const express = require('express');

async function main() {
    const app = express();

    app.listen(4000, () => {
        console.log('Server is running on port 4000');
    });
}

main();
