const {
    Router,
} = require('express');

const HomeController = require('./home.controller');

const init = (app, data) => {
    const controller = new HomeController(data);

    const router = new Router();
    app.use('/api', router);
    router
        .get('/success', (req, res) => {
            req.login.success = true;
            res.redirect('/home');
        })
        .get('/', (req, res) => {
            res.redirect('/home');
        })
        .get('/home', async (req, res) => {
            const model = await controller.getAllHomeData();
            if (req.login.success) {
                model.logged = true;
                delete req.login.success;
            }
            res.send(model);
        });
};

module.exports = {
    init,
};