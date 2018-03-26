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
            console.log(id);
            const viewName = '../../views/forum/posts';
            const posts = await data.posts.getAllByCriteria({
                ThreadId: id,
            });
            try {
                const answers = await data.answers.getAll();

                const users = await data.users.getAll();
                const model = {
                    posts,
                    answers,
                    users,
                };
                await res.render(viewName, model);
            } catch (error) {
                console.log(error);
                const model = {
                    posts,
                };
                await res.render(viewName, model);
            }
            // console.log('I cant');
        })
        .post('/cat/:id', async (req, res) => {
            const {
                id,
            } = req.params;
            console.log(req.body);
            try {
                const userName = req.user[0].dataValues.username;
                console.log(userName);
                const who = await data.users.getAllByCriteria({
                    username: userName,
                });
                const {
                    title,
                    content,
                    newPost,
                    newContent,
                } = req.body;
                console.log(title);
                try {
                    const getId = await data.posts.getAllByCriteria({
                        title: title,

                    });
                    console.log('First ' + getId[0].dataValues.id);
                    await controller
                        .addAnswer({
                            answerContent: content,
                            PostId: +getId[0].dataValues.id,
                            UserId: who[0].dataValues.id,
                        });
                    console.log(content);
                } catch (err) {
                    const plit = await controller
                        .createPost({
                            title: newPost,
                            content: newContent,
                            ThreadId: +id,
                            UserId: who[0].dataValues.id,
                        });

                    await controller
                        .addAnswer({
                            answerContent: newContent,
                            PostId: +plit[0].dataValues.id,
                            UserId: who[0].dataValues.id,
                        });
                }
                await res.redirect('/cat/' + id);
            } catch (error) {
                const {
                    title,
                    content,
                    newContent,
                    newPost,
                } = req.body;
                const getId = await data.posts.getAllByCriteria({
                    title: title,

                });
                // console.log('Second ' + getId);
                try {
                    await controller
                        .addAnswer({
                            answerContent: content,
                            PostId: +getId[0].dataValues.id,
                            UserId: 4,
                        });
                } catch (err) {
                    const plit = await controller
                        .createPost({
                            title: newPost,
                            content: newContent,
                            ThreadId: +id,
                            UserId: 4,
                        });
                    await controller
                        .addAnswer({
                            answerContent: newContent,
                            PostId: +plit[0].dataValues.id,
                            UserId: 4,
                        });
                }
                await res.redirect('/cat/' + id);
            }
        });
};

module.exports = {
    init,
};