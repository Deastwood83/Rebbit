const express = require('express');

/**
 *
 * @returns {express.Express}
 */
const app = () => {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    return app;
};

module.exports = app;
