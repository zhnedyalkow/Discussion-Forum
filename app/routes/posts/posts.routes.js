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
            res.locals.search = { in: 'posts',
                threadId: id,
            };

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
                const model = {
                    posts,
                };
                await res.render(viewName, model);
            }
        })
        .post('/cat/:id', async (req, res) => {
            const {
                id,
            } = req.params;

            if (req.body.delete) {
                try {
                    const userName = req.user[0].dataValues.username;
                    console.log(userName);
                    const search = req.body.delete;
                    const answerForDelete = await data.answers.delete({
                        answerContent: search,
                    });
                    await res.redirect('/cat/' + id);
                } catch (err) {
                    console.log('You need ot be log in');
                    await res.redirect('/cat/' + id);
                }
            } else {
                console.log(req.user);
                if (req.user) {
                    const userName = req.user.dataValues.username;
                    const who = await data.users.getAllByCriteria({
                        username: userName,
                    });
                    const {
                        title,
                        content,
                        newPost,
                        newContent,
                    } = req.body;
                    console.log(req.body);
                    if (title && content) {
                        const getId = await data.posts.getAllByCriteria({
                            title: title,
                        });
                        await controller
                            .addAnswer({
                                answerContent: content,
                                PostId: +getId[0].dataValues.id,
                                UserId: who[0].dataValues.id,
                            });
                    }
                    if (newPost && newContent) {
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
                } else {
                    const {
                        title,
                        content,
                        newPost,
                        newContent,
                    } = req.body;
                    console.log(req.body);
                    if (title && content) {
                        const getId = await data.posts.getAllByCriteria({
                            title: title,
                        });
                        await controller
                            .addAnswer({
                                answerContent: content,
                                PostId: +getId[0].dataValues.id,
                                UserId: 4,
                            });
                    }
                    if (newPost && newContent) {
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
                        await res.redirect('/cat/' + id);
                    }
                }
            }
        });
};


module.exports = {
    init,
};