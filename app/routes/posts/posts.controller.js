class PostsController {
    constructor(data) {
        this.data = data;
    }
    async addAnswer(obj) {
        return this.data.answers.create(obj);
    }
    async createPost(obj) {
        return this.data.posts.create(obj);
    }
}

module.exports = PostsController;