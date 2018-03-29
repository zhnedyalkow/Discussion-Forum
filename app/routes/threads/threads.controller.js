class ThreadsController {
    constructor(data) {
        this.data = data;
    }

    async getAllPostsByThreadId(id) {
        return this.data.posts.getAllByCriteria({
            ThreadId: +id,
        });
    }
    async getAllAnswers() {
        return this.data.answers.getAll();
    }
    async getAllUsers() {
        return this.data.users.getAll();
    }
}


module.exports = ThreadsController;