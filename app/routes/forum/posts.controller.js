class PostsController {
    constructor(data) {
        this.data = data;
    }
    async getUserNames(postsCount) {
        const result = await Promise.all(postsCount.map(async (post) => {
            const username = await this.data.users.getById(post.UserId);
            post.username = username.username;
            return post;
        }));
        return result;
    }

    async getAllPostsbyId(arr) {
        const result = Promise.all(arr.map(async (thread) => {
            let posts = await this.data.posts.getAllByCriteria({
                ThreadId: +thread.id,
            });
            posts = posts
                .map((post) => post.dataValues)
                .sort((a, b) => b.createdAt < a.createdAt);
            posts = await this.getUserNames(posts);
            return posts;
        }));
        return result;
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
                
            sortArr[0][0].dataValues.len = len;
            return sortArr[0][0].dataValues;
        });
        const result = await this.getUserNames(postsCount);
        return result;
    }
}

module.exports = PostsController;