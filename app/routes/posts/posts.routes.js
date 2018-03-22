const {
    Router,
} = require('express');

const init = (app, data) => {
    const router = new Router();
    app.use('', router);
    router
        .get('/createPost', async(req, res) => {
            const viewName = '../../views/forum/createPost';
            res.render(viewName);
        })
        .post('/createPost', async(req, res) => {

            const cat = await data.categories.create({
                catName: req.body.catName,
                description: req.body.description,
            });
            const catId = cat[0].id;
            console.log(catId);
            const thread = await data.threads.create({
                title: req.body.description,
                CategoryId: catId,
                UserId: 3,
            });
            const threadId = thread[0].id;
            console.log(threadId);
            await data.posts.create({
                ThreadId: threadId,
                title: req.body.title,
                content: req.body.post,
                UserId: 3,
            });
            await res.redirect('/');
        })
        .get('/cat/:id', async(req, res) => {
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