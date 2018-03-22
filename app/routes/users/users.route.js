const {
    Router,
} = require('express');
const passport = require('passport');

const UsersController = require('./users.controller');
const init = (app, data) => {
    const router = new Router();
    app.use('', router);

    const controller = new UsersController(data);

    router
        .get('/sign-up', async (req, res) => {
            const viewName = '../../views/forum/sign-up';
            res.render(viewName);
        })
        .post('/sign-up', async (req, res) => {
            const success = await controller.register(req.body);
            if (success) {
                res.redirect('/');
            }
            res.redirect('/sign-up');
        })
        .get('/login', async (req, res) => {
            const viewName = '../../views/forum/login';
            res.render(viewName);
        })
        .post('/login',
            passport.authenticate('local', {
                successRedirect: '/',
                failureRedirect: '/sign-up',
                failureFlash: false,
            })
        );
};

module.exports = {
    init,
};