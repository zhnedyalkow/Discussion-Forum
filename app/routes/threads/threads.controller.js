class ThreadsController {
    constructor(data) {
        this.data = data;
    }

    async getCategoryByCatName(catName) {
        return this.data.categories.getOneByCriteria({
            catName,
        });
    }

    async createThread(obj) {
        return this.data.threads.create(obj);
    }

    async createPost(obj) {
        return this.data.posts.create(obj);
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