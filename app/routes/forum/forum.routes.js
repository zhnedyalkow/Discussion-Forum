const {
    Router,
} = require('express');

const CategoriesController = require('./categories.controller');
const ThreadsController = require('./threads.controller');
const PostsController = require('./posts.controller');
// const UsersController = require('./users.controller');

const init = (app, data) => {
    const categoriesController = new CategoriesController(data);
    const threadsController = new ThreadsController(data);
    const postsController = new PostsController(data);
    // const usersController = new UsersController(data);

    const router = new Router();
    app.use('', router);
    router
        .get('/', (req, res) => {
            res.redirect('/home');
        })
        .get('/home', async (req, res) => {
            const viewName = '../../views/forum/home';

            const allCategories = await categoriesController.getAll();

            const threadsCount = await threadsController
                .getAllThreadsByCategoryId(allCategories);

            const sortedPosts = await postsController
                .getAllSortedPostsAndUsernameByThreadsId(threadsCount);

            const model = {
                allCategories,
                threadsCount,
                sortedPosts,
            };
            res.render(viewName, model);
        })
        .get('/sign-up', async (req, res) => {
            const viewName = '../../views/forum/sign-up';
            res.render(viewName);
        })
        .post('/sign-up', async (req, res) => {
            req.body.userRoleId = 1;
            await data.users.create(req.body);
            res.redirect('/sign-up');
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

            const threads = await threadsController.getAllThreadsByCatName(cat);
            const posts = await postsController.getAllPostsbyId(threads);
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