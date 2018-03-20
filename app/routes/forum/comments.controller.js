class CommentsController {
    constructor(data) {
        this.data = data;
    }

    async getAll() {
        const comments = this.data.comments.getAll();
        return comments;
    }
}

module.exports = CommentsController;