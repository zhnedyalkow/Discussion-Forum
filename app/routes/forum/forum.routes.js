const {
    Router,
} = require('express');
const init = (app, data) => {
    const router = new Router();
    app.use('', router);
    router
        .get('/', async (req, res) => {
            const viewName = '../../views/forum/home';
            res.render(viewName);
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