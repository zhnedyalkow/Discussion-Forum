const {
    Router,
} = require('express');


const CategoriesController = require('./categories.controller');

const init = (app, data) => {
    const controller = new CategoriesController(data);

    const router = new Router();
    app.use('', router);

    router
        .get('/Category/createCategory', async(req, res) => {
            const viewName = '../../views/forum/createCategory';
            res.render(viewName);
        })
        .post('/Category/createCategory', async(req, res) => {
            await controller.create(req.body);
            res.redirect('/');
        })
        .get('/Category/:cat', async(req, res) => {
            const {
                cat,
            } = req.params;
            const viewName = '../../views/forum/category';

            const threads = await controller.getAllThreadsByCatName(cat);
            const posts = await controller.getAllPostsbyId(threads);
            console.log(posts);
            const users = await data.users.getAll();
            console.log(users);
            const model = {
                threads,
                posts,
                users,
            };
            res.render(viewName, model);
        })
        .post('/Category/:cat', async(req, res) => {
            const {
                cat,
            } = req.params;
            if (req.user) {
                console.log(cat);
                const {
                    threadTitle,
                    post,
                    content,
                } = req.body;
                console.log(req.body);
                const userName = req.user.dataValues.username;
                const who = await data.users.getAllByCriteria({
                    username: userName,
                });
                // const threads = await controller.getAllThreadsByCatName(cat);
                const catObj = await data.categories.getAllByCriteria({
                    catName: cat,
                });
                const all = await controller
                    .createThread({
                        title: threadTitle,
                        CategoryId: catObj[0].dataValues.id,
                        UserId: who[0].dataValues.id,
                    });

                await controller
                    .createPost({
                        title: post,
                        content: content,
                        ThreadId: all[0].dataValues.id,
                        UserId: 2,
                    });

                res.redirect('/Category/' + cat);
            } else {
                res.redirect('/Category/' + cat);
            }

        });
};

module.exports = {
    init,
};