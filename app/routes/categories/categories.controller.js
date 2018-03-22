class CategoriesController {
    constructor(data) {
        this.data = data;
    }
    async getAllThreadsByCatName(name) {
        const catObj = await this.data.categories.getAllByCriteria({
            catName: name,
        });
        const threads = await this.data.threads.getAllByCriteria({
            CategoryId: catObj[0].id,
        });
        return threads;
    }

    async getAllPostsbyId(arr) {
        const result = Promise.all(arr.map(async (thread) => {
            let posts = await this.data.posts.getAllByCriteria({
                ThreadId: +thread.id,
            });
            posts = posts
                .map((post) => post.dataValues)
                .sort((a, b) => b.createdAt < a.createdAt);

            posts = await Promise.all(posts.map(async (post) => {
                const username = await this.data.users.getById(post.UserId);
                post.username = username.username;
                return post;
            }));

            return posts;
        }));
        return result;
    }

    async create(obj) {
        return this.data.categories.create(obj);
    }
}

module.exports = CategoriesController;