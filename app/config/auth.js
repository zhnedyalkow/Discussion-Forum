const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bcrypt = require('bcrypt-nodejs');
const {
    Strategy,
} = require('passport-local');

const init = (app, data) => {
    passport.use(new Strategy(
        async (username, password, done) => {
            const user = await data.users.getOneByCriteria({
                username: username,
            });

            if (!user) {
                done(null, false, {
                    message: `Login failed, reason given:
                    Incorrect password!`,
                });
            } else {
                bcrypt.compare(password, user.password, function(err, res) {
                    if (err) {
                        return done(err);
                    }

                    if (res === false) {
                        return done(null, false, {
                            message: `Login failed, reason given:
                            Incorrect password!`,
                        });
                    }
                    // User with such username and password exists
                    return done(null, user);
                });
            }
        }));

    // User to string
    passport.serializeUser((user, done) => {
        console.log('************Generate cookie************');
        done(null, user.username);
    });

    // String to user
    passport.deserializeUser(async (username, done) => {
        console.log('************Cookie received************');
        const user = await data.users.getOneByCriteria({
            username: username,
        });
        if (!user) {
            return done(new Error('System did not recognize your username!'));
        }
        return done(null, user);
    });

    app.use(cookieParser());
    app.use(session({
        secret: 'Little teapot',
    }));
    app.use(passport.initialize());
    app.use(passport.session());
};

module.exports = {
    init,
};