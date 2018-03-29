const {
    Router,
} = require('express');


const ThreadsController = require('./threads.controller');

const init = (app, data) => {
    const controller = new ThreadsController(data);

    const router = new Router();
    app.use('/Thread', router);

    router
        .get('/:id', async (req, res) => {
            const viewName = '../../views/forum/posts';
            const {
                id,
            } = req.params;

            res.locals.search = {
                in: 'posts',
                threadId: id,
            };

            const posts = await controller.getAllPostsByThreadId(id);
            const answers = await controller.getAllAnswers();
            const users = await controller.getAllUsers();

            const model = {
                posts,
                answers,
                users,
                ThreadId: id,
            };
            await res.render(viewName, model);
        });
};

module.exports = {
    init,
};