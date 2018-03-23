class PostsController {
    constructor(data) {
        this.data = data;
    }
    async getAllAnswers(obj) {
        // console.log(obj);
        const result = await this.data.answers.getAllByCriteria(obj);
        // console.log(result);
        return result;
    }
}

module.exports = PostsController;