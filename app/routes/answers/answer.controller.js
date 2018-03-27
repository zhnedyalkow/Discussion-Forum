class AnswersController {
    constructor(data) {
        this.data = data;
    }

    async getAll() {
        const answers = this.data.answers.getAll();
        return answers;
    }

    // async addAnswer(obj) {
    //     return this.data.answers.create(obj);
    // }
}

module.exports = AnswersController;