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
        .get('/home', async(req, res) => {
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
        .get('/sign-up', async(req, res) => {
            const viewName = '../../views/forum/sign-up';
            res.render(viewName);
        })
        .post('/sign-up', async(req, res) => {
            req.body.userRoleId = 1;
            await data.users.create(req.body);
            res.redirect('/sign-up');
        })
        .get('/myprofile', async(req, res) => {
            const viewName = '../../views/forum/privateLogin';
            res.render(viewName);
        })
        .get('/createPost', async(req, res) => {
            const viewName = '../../views/forum/createPost';
            res.render(viewName);
        })
        .post('/createPost', async(req, res) => {
            const viewName = '../../views/forum/createPost';
            // console.log(req.body.namePost);
            await data.categories.create(req.body.namePost, req.body.description);
            const catId = await data.categories.findCatId(req.body.namePost);
            // console.log(catId);
            await data.threads.create(req.body.description, catId);
            const threadId = await data.threads.findThreadId(catId);
            // console.log(threadId);
            await data.posts.create(threadId, req.body.title, req.body.post);
            await res.redirect('/');
        })
        .get('/:cat', async(req, res) => {
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
        })
        .get('/cat/:id', async(req, res) => {
            const {
                id,
            } = req.params;
            // console.log(id);
            const viewName = '../../views/forum/posts';

            // const threads = await controller.getAllThreadsByCatName(cat);
            const threadId = 2;
            const posts = await data.posts.getAllById(id);
            // console.log(posts);

            const model = {

                posts,
            };

            res.render(viewName, model);
        });

};

module.exports = {
    init,
};