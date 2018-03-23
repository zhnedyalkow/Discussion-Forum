const {
    Router,
} = require('express');
const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');
const PostController = require('./posts.controller');
const init = (app, data) => {
    const router = new Router();
    const controller = new PostController();

    app.use('', router);
    router
        .get('/createPost', async(req, res) => {
            const viewName = '../../views/forum/createPost';
            res.render(viewName);
        })
        .post('/createPost', [
            check('catName', 'It must be more than 5 words')
            .isLength({ min: 5 })
        ], async(req, res, next) => {
            const errors = validationResult(req);
            const obj = errors.mapped().catName;
            const model = { obj };
            console.log(model.obj);
            if (!errors.isEmpty()) {
                // alert('It must be 5 letters or more!!!');
                // console.log({ errors: errors.mapped() });
                const viewName = '../../views/forum/errorPage';
                res.render(viewName, model);
            }
            const cat = await data.categories.create({
                catName: req.body.catName,
                description: req.body.description,
            });
            const catId = cat[0].id;
            const thread = await data.threads.create({
                title: req.body.description,
                CategoryId: catId,
                UserId: 3,
            });
            const threadId = thread[0].id;
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
            const answers = await data.answers.getAllByCriteria({
                PostId: +id,
            });
            // console.log(posts);
            const model = {
                posts,
                answers,
            };
            console.log(model);
            res.render(viewName, model);
        })
        .get('/errorPage', async(req, res) => {
            const viewName = '../../views/forum/errorPage';
            res.render(viewName);
        });

};
module.exports = {
    init,
};