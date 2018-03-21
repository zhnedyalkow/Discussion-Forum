class PostsController {
    constructor(data) {
        this.data = data;
    }

    async getAll() {
        const posts = this.data.posts.getAll();
        return posts;
    }
}

module.exports = PostsController;