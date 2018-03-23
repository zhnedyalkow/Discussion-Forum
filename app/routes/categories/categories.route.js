const {
    Router,
} = require('express');


const CategoriesController = require('./categories.controller');

const init = (app, data) => {
    const controller = new CategoriesController(data);

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
        .get('/Category/:cat', async (req, res) => {
            const {
                cat,
            } = req.params;
            const viewName = '../../views/forum/category';

            const threads = await controller.getAllThreadsByCatName(cat);
            const posts = await controller.getAllPostsbyId(threads);
            const model = {
                threads,
                posts,
            };

            res.render(viewName, model);
        });
};

module.exports = {
    init,
};