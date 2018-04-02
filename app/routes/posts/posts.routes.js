const {
    Router,
} = require('express');

const PostsController = require('./posts.controller');
const init = (app, data) => {
    const controller = new PostsController(data);

    const router = new Router();
    app.use('/Post', router);

    router
        .post('/createPost', async (req, res) => {
            if (req.user) {
                req.checkBody('title',
                        'Post title must be between 3 and 50 chars')
                    .isLength({
                        min: 3,
                        max: 50,
                    });
                req.checkBody('content',
                        'Post content must between 3 and 200 chars')
                    .isLength({
                        min: 3,
                        max: 200,
                    });

                const errors = req.validationErrors();
                if (!errors) {
                    req.body.UserId = req.user.id;
                    await controller.createPost(req.body);
                }
            }
            res.redirect('/Thread/' + req.body.ThreadId);
        })
        .post('/createAnswer', async (req, res) => {
            if (req.user) {
                req.checkBody('answerContent',
                        'Answer content must between 3 and 200 chars')
                    .isLength({
                        min: 3,
                        max: 200,
                    });

                const errors = req.validationErrors();
                if (!errors) {
                    req.body.UserId = req.user.id;
                    req.body.PostId = +req.body.PostId;
                    await controller.createAnswer(req.body);
                }
            }
            res.redirect('/Thread/' + req.body.ThreadId);
        })
        .post('/deleteAnswer', async (req, res) => {
            if (req.user) {
                const id = req.body.answerId;
                await controller.deleteAnswer(id);
            }
            res.redirect('/Thread/' + req.body.ThreadId);
        });
};


module.exports = {
    init,
};