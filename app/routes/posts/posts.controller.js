class PostsController {
    constructor(data) {
        this.data = data;
    }

        /**
     * @description Delete an answer
     * @async
     * @param {integer} id
     * receives an answer ID
     * @return {object} with the deleted answer
     */
    async deleteAnswer(id) {
        return this.data.answers.delete({
            id: +id,
        });
    }

        /**
     * @description Finds all Posts
     * @async
     * @return {Array} with Posts as objects
     */
    async getAllPosts() {
        return this.data.posts.getAll();
    }

            /**
     * @description Finds all Answers
     * @async
     * @return {Array} with Answer as objects
     */
    async getAllAnswers() {
        return this.data.answers.getAll();
    }

        /**
     * @description Creates a new Post
     * @async
     * @param {Object} obj
     * receives an object of the Post
     * @return {Object} object of the created Post
     */
    async createPost(obj) {
        return this.data.posts.create(obj);
    }

        /**
     * @description Finds all Threads in the given Category
     * @async
     * @param {Object} obj
     * receives an object of the Answer
     * @return {Object} object of the created Answer
     */
    async createAnswer(obj) {
        return this.data.answers.create(obj);
    }
}

module.exports = PostsController;