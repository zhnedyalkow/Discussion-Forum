const {
    Router,
} = require('express');
const AnswersController = require('./answer.controller');

const init = (app, data) => {

    const controller = new AnswersController(data);
    const router = new Router();
    app.use('', router);
    router
    // .get('/cat/:id', async(req, res) => {
    //     const { id } = req.params;
    //     console.log(id);
    //     const answers = await controller.getAllAnswers({
    //         PostId: id,
    //     });
    //     const viewName = '../../views/forum/posts';
    //     const model = { answers };
    //     console.log(model);
    //     if (model) {
    //         res.render(viewName, model);
    //     } else {
    //         res.render(viewName);
    //     }

    // })
        .post('/cat/:id', async(req, res) => {
        const message = req.body.msg;
        console.log(message);
        const { id } = req.params;
        console.log(id);
        await controller.createAnswer({
            answerContent: req.body.msg,
            PostId: id,
            UserId: 2,
        });
        res.redirect('/cat/' + id);
    });

};

module.exports = {
    init,
};