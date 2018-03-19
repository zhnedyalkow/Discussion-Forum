/* globals __dirname __filename */

const fs = require('fs');
const path = require('path');

// const init = (app, data) => {
const init = (app) => {
    app.get('/', async (req, res) => {
        // const viewName = '../../views/home';
        const viewName = '../../views/forum/home';

        res.render(viewName);
    });

    app.get('/', async (req, res) => {
        const viewName = '../../views/forum/login';

        res.render(viewName);
    });
}

/** dynamically load all routes */

fs.readdirSync(__dirname)
    .filter((filename) => filename !== path.basename(__filename))
    .filter((filename) => filename !== 'index.js')
    .map((filename) => path.join(__dirname, filename))
    .forEach((modulePath) => {
        // require(modulePath).init(app, data);
        require(modulePath).init(app);
    });

module.exports = {
    init,
};