const {
    Router,
} = require('express');


const ThreadsController = require('./threads.controller');

const init = (app, data) => {
    const controller = new ThreadsController(data);

    const router = new Router();
    app.use('', router);

    router

        .get('/Category/createCategory', async (req, res) => {
            const viewName = '../../views/forum/createCategory';
            res.render(viewName);
        })
        .post('/Category/createCategory', async (req, res) => {
            await controller.create(req.body);
            res.redirect('/');
        })
        .get('/createNewThread', (req, res) => {
            const viewName = '../../views/forum/createNewThread';
            res.render(viewName);
        });
};

module.exports = {
    init,
};