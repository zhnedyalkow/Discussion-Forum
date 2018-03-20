const passport = require('passport');
const init = (app, data) => {
    app.get('/login', async (req, res) => {
        const viewName = '../../views/forum/login';
        res.render(viewName);
    });
    app.post('/login',
        passport.authenticate('local', {
            successRedirect: '/myprofile',
            failureRedirect: '/sign-up',
            failureFlash: false,
        })
    );
};

module.exports = {
    init,
};