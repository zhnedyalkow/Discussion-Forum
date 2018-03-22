const config = require('../config');
const db = require('../../db/models');
const {
    Users,
} = db;
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const {
    Strategy,
} = require('passport-local');

const init = (app) => {
    passport.use(new Strategy(
        async (username, password, done) => {
            const user = await Users.findOne({
                where: {
                    username: username,
                    password: password,
                },
            });
            // , (err, user) => {
            //     if (err) {
            //         return done(err);
            //     }
            console.log(user.dataValues);
            if (!user) {
                return done(null, false, {
                    message: 'Incorrect username!',
                });
            }
            // if (!user.validPassword(password)) {
            //     return done(null, false, { message: 'Incorrect password.' });
            // }
            return done(null, user);
        }));
    passport.serializeUser((user, done) => {
        console.log('****Generate cookie************');
        done(null, user.username);
    });

    passport.deserializeUser(async (username, done) => {
        console.log('Cookie receives');
        const user = await Users.findAll({
            where: {
                username: username,
            },
        });
        console.log(user);
        if (!user) {
            return done(new Error('System did not recognize your username'));
        }
        return done(null, user);
    });

    app.use(cookieParser());
    app.use(session({
        secret: 'Little teapot',
    }));
    app.use(passport.initialize());
    app.use(session());
    // app.use(app.router);
};

module.exports = {
    init,
};
