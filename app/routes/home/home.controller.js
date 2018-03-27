class HomeController {
    constructor(data) {
        this.data = data;
    }

    async getAllHomeData() {
        const allCategories = await this.getAll();

        const threadsCount = await this
            .getAllThreadsByCategoryId(allCategories);

        const sortedPosts = await this
            .getAllSortedPostsAndUsernameByThreadsId(threadsCount);

        // const cleanedDate = await this
        //     .formatedDate(sortedPosts);

        console.log(allCategories[0].createdAt);
        return {
            allCategories,
            threadsCount,
            sortedPosts,
            // cleanedDate,
        };
    }

    async getAll() {
        const categories = this.data.categories.getAll();
        return categories;
    }

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
                b[0].dataValues.createdAt < a[0].dataValues.createdAt);

            const len = posts
                .map((post) => post.length)
                .reduce((a, s) => a + s, 0);

            if (sortArr.length > 0) {
                sortArr[0][0].dataValues.len = len;
                return sortArr[0][0].dataValues;
            }
            return {
                UserId: 1,
            };
        });

        const result = await Promise.all(postsCount.map(async (post) => {
            const username = await this.data.users.getById(post.UserId);
            post.username = username.username;
            return post;
        }));
        return result;
    }

    // async formatedDate(data) {
    //     const n = 5; // space
    //     let dataBeforeFiveSpace = '';
    //     const str = data.split(' ');

    //     if (str.join(' ').includes('GMT')) {
    //         dataBeforeFiveSpace = str.splice(0, n).join(' ');
    //         return dataBeforeFiveSpace;
    //     }
    //     return dataBeforeFiveSpace;
    // }
}


module.exports = HomeController;