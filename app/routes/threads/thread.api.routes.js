const {
    Router,
} = require('express');


const ThreadsController = require('./threads.controller');

const init = (app, data) => {
    const controller = new ThreadsController(data);

    const router = new Router();
    app.use('/api/Thread', router);

    router
        .post('/createThread', async (req, res) => {
            if (req.user) {
                const {
                    threadTitle,
                    postTitle,
                    postContent,
                    catName,
                } = req.body;
                const UserId = req.user.id;

                const categoryObj =
                    await controller.getCategoryByCatName(catName);

                const threadObj = await controller.createThread({
                    title: threadTitle,
                    UserId,
                    CategoryId: categoryObj.id,
                });

                const post = await controller.createPost({
                    title: postTitle,
                    content: postContent,
                    UserId,
                    ThreadId: threadObj.id,
                });
                const model = {
                    post,
                    threadObj,
                };
                res.status(201)
                    .send(model);
            }
            res.redirect('/Category/' + req.body.catName);
        })
        .get('/:id', async (req, res) => {
            const {
                id,
            } = req.params;

            const posts = await controller.getAllPostsByThreadId(id);
            const answers = await controller.getAllAnswers();
            const users = await controller.getAllUsers();

            const model = {
                posts,
                answers,
                users,
                ThreadId: id,
            };
            res.send(model);
        });
};

module.exports = {
    init,
};