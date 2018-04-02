const {
    Router,
} = require('express');


const ThreadsController = require('./threads.controller');

const init = (app, data) => {
    const controller = new ThreadsController(data);

    const router = new Router();
    app.use('/Thread', router);

    router
        .post('/createThread', async (req, res) => {
            if (req.user) {
                req.checkBody('threadTitle',
                        'Thread title must be between 3 and 50 chars')
                    .isLength({
                        min: 3,
                        max: 50,
                    });
                req.checkBody('postTitle',
                        'Post title must be between 3 and 50 chars')
                    .isLength({
                        min: 3,
                        max: 50,
                    });
                req.checkBody('postContent',
                        'Post content must between 3 and 200 chars')
                    .isLength({
                        min: 3,
                        max: 200,
                    });

                const errors = req.validationErrors();
                if (!errors) {
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

                    await controller.createPost({
                        title: postTitle,
                        content: postContent,
                        UserId,
                        ThreadId: threadObj.id,
                    });
                }
            }
            res.redirect('/Category/' + req.body.catName);
        })
        .get('/:id', async (req, res) => {
            const viewName = '../../views/forum/posts';
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
            res.render(viewName, model);
        });
};

module.exports = {
    init,
};