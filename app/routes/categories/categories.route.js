const {
    Router,
} = require('express');


const CategoriesController = require('./categories.controller');

const init = (app, data) => {
    const controller = new CategoriesController(data);

    const router = new Router();
    app.use('/Category', router);

    router
        .get('/createCategory', async (req, res) => {
            const viewName = '../../views/forum/createCategory';
            res.render(viewName);
        })
        .post('/createCategory', async (req, res) => {
            await controller.create(req.body);
            res.redirect('/');
        })
        .get('/:cat', async (req, res) => {
            const {
                cat,
            } = req.params;
            const viewName = '../../views/forum/category';

            const threads = await controller.getAllThreadsByCatName(cat);
            const posts = await controller.getAllPostsbyId(threads);

            res.locals.search = { in: 'threads',
                catName: cat,
            };
            const users = await data.users.getAll();
            const model = {
                threads,
                posts,
                users,
            };
            res.render(viewName, model);
        })
        .post('/:cat', async (req, res) => {
            const {
                cat,
            } = req.params;
            if (req.user) {
                const {
                    threadTitle,
                    post,
                    content,
                } = req.body;
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