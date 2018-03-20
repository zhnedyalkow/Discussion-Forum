const fs = require('fs');
const path = require('path');
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
            const email = req.body.email;
            const username = req.body.username;
            const password = req.body.password;
            const firstName = req.body.firstName;
            const lastName = req.body.lastName;
            const userRoleId = 1;
            console.log(req.body);
            await data.users.create({
                email,
                username,
                password,
                firstName,
                lastName,
                userRoleId,
            });
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