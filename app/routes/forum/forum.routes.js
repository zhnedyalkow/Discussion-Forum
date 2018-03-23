const {
    Router,
} = require('express');

const CategoriesController = require('./categories.controller');
const DataController = require('./data.controller');
const init = (app, data) => {
    const categoriesController = new CategoriesController(data);
    const controller = new DataController(data);
    const router = new Router();
    app.use('', router);
    router
        .get('/', (req, res) => {
            res.redirect('/home');
        })
        .get('/home', async (req, res) => {
            console.log(req.user);
            console.log(req.isAuthenticated());
            const viewName = '../../views/forum/home';
            // get all categories
            const allCategories = await categoriesController.getAll();

            // count of all threads with catID
            const threadsCount =
                await controller.getAllThreadsByCategoryId(allCategories);

            // count of all posts with those threads
            const postsCount =
                await controller.getAllPostsByThreadsId(threadsCount);

            // get last post user and date
            let lastPosts =
                await controller.getLastPostByThreadId(postsCount);
            // const userId=lastPosts.userId;
            lastPosts = await controller.getUserNames(lastPosts);

            const model = {
                allCategories,
                threadsCount,
                postsCount,
                lastPosts,
            };
            res.render(viewName, model);
        })
        .get('/sign-up', async (req, res) => {
            console.log(req.isAuthenticated());
            const viewName = '../../views/forum/sign-up';
            res.render(viewName);
        })
        .post('/sign-up', async (req, res) => {
            
            req.body.userRoleId = 1;
            await data.users.create(req.body);
            res.redirect('/');
        })
        .get('/myprofile', async (req, res) => {
            const viewName = '../../views/forum/privateLogin';
            res.render(viewName);
        })
        .get('/Category/:cat', async (req, res) => {
            const {
                cat,
            } = req.params;
            const viewName = '../../views/forum/category';

            const threads = await controller.getAllThreadsByCatName(cat);
            const posts = await controller.getAllPostsbyId(threads);

            const model = {
                threads,
                posts,
            };

            res.render(viewName, model);
        });
};

module.exports = {
    init,
};