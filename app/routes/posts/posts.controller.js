class PostsController {
    constructor(data) {
        this.data = data;
    }

    async deleteAnswer(id) {
        return this.data.answers.delete({
            id: +id,
        });
    }

    async createPost(obj) {
        return this.data.posts.create(obj);
    }
    async createAnswer(obj) {
        return this.data.answers.create(obj);
    }
}

module.exports = PostsController;