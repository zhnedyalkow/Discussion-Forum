class AnswersController {
    constructor(data) {
        this.data = data;
    }

    async getAll() {
        const answers = this.data.answers.getAll();
        return answers;
    }
}

const init = (app, data) => {
    // new router

    // router
    // .get('/create');

    //  app.use('/answers', router);
};

// module.exports =

module.exports = AnswersController;