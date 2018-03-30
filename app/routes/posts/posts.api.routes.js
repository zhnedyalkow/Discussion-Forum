const {
    Router,
} = require('express');

const PostsController = require('./posts.controller');
const init = (app, data) => {
    const controller = new PostsController(data);

    const router = new Router();
    app.use('/api/Post', router);
    router
        .post('/createPost', async (req, res) => {
            if (req.user) {
                req.body.UserId = req.user.id;
                const post = await controller.createPost(req.body);
                res.status(201)
                    .send(post);
            }
            res.redirect('/Thread/' + req.body.ThreadId);
        })
        .post('/createAnswer', async (req, res) => {
            if (req.user) {
                req.body.UserId = req.user.id;
                req.body.PostId = +req.body.PostId;
                const answer = await controller.createAnswer(req.body);
                res.status(201)
                    .send(answer);
            }
            res.redirect('/Thread/' + req.body.ThreadId);
        })
        .post('/deleteAnswer', async (req, res) => {
            if (req.user) {
                const id = req.body.answerId;
                const answer = await controller.deleteAnswer(id);
                res.status(201)
                    .send(answer);
            }
            res.redirect('/Thread/' + req.body.ThreadId);
        });
};


module.exports = {
    init,
};