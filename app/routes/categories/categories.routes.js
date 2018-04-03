const {
    Router,
} = require('express');

const CategoriesController = require('./categories.controller');

const init = (app, data) => {
    const controller = new CategoriesController(data);

    const router = new Router();
    app.use('/Category', router);

    router
        .post('/createCategory', async (req, res) => {
            if (req.user) {
                req.checkBody('catName',
                        'Category name must be between 3 and 50 chars')
                    .isLength({
                        min: 3,
                        max: 50,
                    });
                req.checkBody('description',
                        'Category description must between 3 and 200 chars')
                    .isLength({
                        min: 3,
                        max: 200,
                    });

                const errors = req.validationErrors();
                if (!errors) {
                    await controller.createCategory(req.body);
                }
            }
            res.redirect('/');
        })

        .get('/:cat', async (req, res) => {
            const {
                cat,
            } = req.params;
            const viewName = '../../views/forum/category';
            const threads = await controller.getAllThreadsByCatName(cat);
            const posts = await controller.getAllPostsbyId(threads);
            res.locals.routes = [{
                name: 'Home',
                url: '/',
            }, {
                name: cat,
                url: req.originalUrl,
            }];
            const model = {
                threads,
                posts,
                catName: cat,
            };
            res.render(viewName, model);
        });
};

module.exports = {
    init,
};