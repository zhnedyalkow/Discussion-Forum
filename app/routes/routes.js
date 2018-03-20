const {
    Router,
} = require('express');

const init = (app, data) => {
    const router = new Router();
    router
        .get('/', async (req, res) => {
            const viewName = '../../views/forum/home';

            res.render(viewName);
        })
        .get('/', async (req, res) => {
            const viewName = '../../views/forum/login';

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
            const userRole = req.body.userRole;
            await data.create(email, username, password,
                firstName, lastName, userRole);
            console.log(req.body);
            res.redirect('/sign-up');
        })
        .get('/myprofile', async (req, res) => {
            const viewName = '../../views/forum/privateLogin';
            res.render(viewName);
        });
};

/** dynamically load all routes */

// fs.readdirSync(__dirname)
//     .filter((filename) => filename !== path.basename(__filename))
//     .filter((filename) => filename !== 'index.js')
//     .map((filename) => path.join(__dirname, filename))
//     .forEach((modulePath) => {
//         require(modulePath).init(app, data);
//         // require(modulePath).init(app);
//     });

module.exports = {
    init,
};