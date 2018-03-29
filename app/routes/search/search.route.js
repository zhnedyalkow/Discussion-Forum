const {
    Router,
} = require('express');


const SearchController = require('./search.controller');

const init = (app, data) => {
    const controller = new SearchController(data);

    const router = new Router();
    app.use('', router);

    router
        .get('/Category/createCategory', async (req, res) => {
            const viewName = '../../views/forum/createCategory';
            res.render(viewName);
        });
};

module.exports = {
    init,
};