const {
    Router,
} = require('express');

const CategoriesController = require('./categories.controller');

const init = (app, data) => {
    const categoriesController = new CategoriesController(data);


    const router = new Router();
    app.use('', router);
    router
        .get('/', async (req, res) => {
            const viewName = '../../views/forum/home';
            const allCategories = await categoriesController.getAll();
            const model = {
                allCategories,
            };
            res.render(viewName, model);
        })
        .get('/sign-up', async (req, res) => {
            const viewName = '../../views/forum/sign-up';
            res.render(viewName);
        })
        .post('/sign-up', async (req, res) => {
            req.body.userRoleId = 1;
            await data.users.create(req.body);
            res.redirect('/sign-up');
        })
        .get('/myprofile', async (req, res) => {
            const viewName = '../../views/forum/privateLogin';
            res.render(viewName);
        });

};

module.exports = {
    init,
};