const {
    Router,
} = require('express');

const HomeController = require('./home.controller');

const init = (app, data) => {
    const controller = new HomeController(data);

    const router = new Router();
    app.use('', router);
    router
        .get('/', (req, res) => {
            console.log(req.isAuthenticated());
            res.redirect('/home');
        })
        .get('/home', async (req, res) => {
            console.log(req.isAuthenticated());
            const viewName = '../../views/forum/home';
            const model = await controller.getAllHomeData();
            res.render(viewName, model);
        });
        // .get('/myprofile', async (req, res) => {
        //     const viewName = '../../views/forum/privateLogin';
        //     res.render(viewName);
        // });
};

module.exports = {
    init,
};