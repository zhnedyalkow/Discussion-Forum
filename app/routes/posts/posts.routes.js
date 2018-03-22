const {
    Router,
} = require('express');

const PostsController = require('./posts.controller');
const init = (app, data) => {
    const controller = new PostsController(data);

    const router = new Router();
    app.use('', router);
    router
        .get('/createPost', async (req, res) => {
            const viewName = '../../views/forum/createPost';
            res.render(viewName);
        })
        .post('/createPost', async (req, res) => {
            const post = controller.create();
            const cat = await data.categories.create({
                catName: req.body.catName,
                description: req.body.description,
            });

            const thread = await data.threads.create({
                title: req.body.description,
                CategoryId: 3,
                UserId: 3,
            });

            await data.posts.create({
                ThreadId: 3,
                title: req.body.title,
                content: req.body.post,
                UserId: 3,
            });
            res.redirect('/');
        })
        .get('/cat/:id', async (req, res) => {
            const {
                id,
            } = req.params;

            const viewName = '../../views/forum/posts';

            const posts = await data.posts.getAllByCriteria({
                ThreadId: id,
            });
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