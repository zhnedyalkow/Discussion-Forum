class CategoriesController {
    constructor(data) {
        this.data = data;
    }

    /**
     * @description Finds all Threads in the given Category
     * @async
     * @param {string} name
     * receives category name
     * @return {Array} Array with all threads in that category
     */
    async getAllThreadsByCatName(name) {
        const catObj = await this.data.categories.getOneByCriteria({
            catName: name,
        });
        const threads = await this.data.threads.getAllByCriteria({
            CategoryId: catObj.id,
        });
        return threads;
    }

    /**
     * @description Finds all Posts for all the threads in a category
     * @async
     * @param {Array} arr
     * receives array with all threads in a category
     * @return {Array}
     * nested array with all threads replaced with the associated posts
     */
    async getAllPostsbyId(arr) {
        const result = Promise.all(arr.map(async (thread) => {
            let posts = await this.data.posts.getAllByCriteria({
                ThreadId: +thread.id,
            });
            posts = posts
                .map((post) => post.dataValues)
                .sort((a, b) => b.createdAt < a.createdAt);

            posts = await Promise.all(posts.map(async (post) => {
                const userId = post.UserId;
                const username = await this.data.users.getById(userId);
                post.username = username.username;
                return post;
            }));

            return posts;
        }));
        return result;
    }

    /**
     * @description Creates a category
     * @async
     * @param {Object} obj
     * receives an object and inserts it in the database
     * @return {Object} object with the category info
     */
    async createCategory(obj) {
        const category = this.data.categories.create(obj);
        return category;
    }
}

module.exports = CategoriesController;