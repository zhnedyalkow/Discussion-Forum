const {
    Router,
} = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt-nodejs');

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
            // const errModel
            // -> res.render('/sign-up', errModel)
            res.redirect('/sign-up');
        })
        .get('/login', async (req, res) => {
            const viewName = '../../views/forum/login';
            const authErrors = req.flash('error');
            res.render(viewName, {
                authErrors: authErrors,
            });
        })
        .post('/login',
            passport.authenticate('local', {
                successRedirect: '/success',
                failureRedirect: '/login',
                failureFlash: true,
            })
        )
        .get('/logout', (req, res) => {
            req.logout();
            // req.session.destroy();
            res.redirect('/');
        });
};

module.exports = {
    init,
};