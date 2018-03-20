class AnswersController {
    constructor(data) {
        this.data = data;
    }

    async getAll() {
        const answers = this.data.answers.getAll();
        return answers;
    }
}

module.exports = AnswersController;