class AnswersController {
    constructor(data) {
        this.data = data;
    }
    async createAnswer(obj) {

        await this.data.answers.create(obj);
        // await this.data.answers.findOrCreate({
        //     where: {
        //         answerContent: msg,
        //         postId: postId,
        //     },
        // });
    }
    async getAllAnswers(obj) {
        const result = await this.data.answers.getAllByCriteria(obj);
        console.log(result);
    }
}

module.exports = AnswersController;