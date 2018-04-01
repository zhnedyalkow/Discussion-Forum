class ThreadsController {
    constructor(data) {
        this.data = data;
    }

    /**
     * @description Finds a Category by name
     * @async
     * @param {string} catName
     * receives category name
     * @return {Object} object with category info
     */
    async getCategoryByCatName(catName) {
        return this.data.categories.getOneByCriteria({
            catName,
        });
    }


    /**
     * @description Crates a new Thread
     * @async
     * @param {Object} obj
     * recevies an object with thread info and inserts it in database
     * @return {Object} object of the inserted element
     */
    async createThread(obj) {
        return this.data.threads.create(obj);
    }

    /**
     * @description Crates a new Post
     * @async
     * @param {Object} obj
     * recevies an object with post info and inserts it in database
     * @return {Object} object of the inserted element
     */
    async createPost(obj) {
        return this.data.posts.create(obj);
    }

    /**
     * @description Finds all posts with give thread id
     * @async
     * @param {integer} id
     * receives thread id
     * @return {Array} Array with all posts in that Thread
     */
    async getAllPostsByThreadId(id) {
        return this.data.posts.getAllByCriteria({
            ThreadId: +id,
        });
    }

    /**
     * @description Finds all Answers
     * @async
     * @return {Array} Array with all Answers
     */
    async getAllAnswers() {
        return this.data.answers.getAll();
    }

    /**
     * @description Finds all Users
     * @async
     * @return {Array} Array with all Users
     */
    async getAllUsers() {
        return this.data.users.getAll();
    }
}


module.exports = ThreadsController;