const {
    Router,
} = require('express');


const SearchController = require('./search.controller');

const init = (app, data) => {
    const controller = new SearchController(data);

    const router = new Router();
    app.use('/api', router);

    router
        .get('/Category/createCategory', async (req, res) => {
            res.send();
        });
};

module.exports = {
    init,
};