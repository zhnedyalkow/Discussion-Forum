class HomeController {
    constructor(data) {
        this.data = data;
    }

    /**
     * @description
     * Finds all categories,
     * the number of all threads by category
     * and the number of all posts by category
     * @async
     * @return {Object}
     * an object with allCategories-array,
     * threadsCount-array and sortedPosts-array
     */
    async getAllHomeData() {
        const allCategories = await this.data.categories.getAll();

        const threadsCount = await this
            .getAllThreadsByCategoryId(allCategories);

        const sortedPosts = await this
            .getAllSortedPostsAndUsernameByThreadsId(threadsCount);

        return {
            allCategories,
            threadsCount,
            sortedPosts,
        };
    }

    /**
     * @description Finds all threads for all given categories
     * @async
     * @param {Array} arr
     * recevies an array with category objects
     * @return {Array}
     * nested array where all categories are replaced by an array of threads
     */
    async getAllThreadsByCategoryId(arr) {
        const threadsCount = Promise.all(arr
            .map(async (cat) => {
                const result = await this.data.threads.getAllByCriteria({
                    CategoryId: +cat.id,
                });
                return result;
            }));
        return threadsCount;
    }

    /**
     * @description Finds all threads for all given categories
     * @async
     * @param {Array} nestedArr
     * recevies a nested array with arrays of threads
     * @return {Array}
     * array with the latest post for each category
     */
    async getAllSortedPostsAndUsernameByThreadsId(nestedArr) {
        let postsCount = await Promise.all(nestedArr.map(async (arr) => {
            const getPosts = await Promise.all(arr
                .map(async (thread) =>
                    await this.data.posts.getAllByCriteria({
                        ThreadId: +thread.id,
                    })));
            return getPosts;
        }));
        postsCount = postsCount.map((posts) => {
            const sortArr = posts.sort((a, b) =>
                a[0].dataValues.createdAt > b[0].dataValues.createdAt);


            const len = posts
                .map((post) => post.length)
                .reduce((a, s) => a + s, 0);


            if (sortArr.length > 0) {
                sortArr[0][0].dataValues.len = len;
                return sortArr[0][0].dataValues;
            }
            return {
                UserId: null,
            };
        });

        const result = await Promise.all(postsCount.map(async (post) => {
            const username = await this.data.users.getById(post.UserId);
            if (username) {
                post.username = username.username;
            } else {
                post.username = null;
                post.createdAt = null;
            }
            return post;
        }));
        return result;
    }
}


module.exports = HomeController;