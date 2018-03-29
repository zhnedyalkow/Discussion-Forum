class CategoriesController {
    constructor(data) {
        this.data = data;
    }
    async getAllThreadsByCatName(name) {
        const catObj = await this.data.categories.getOneByCriteria({
            catName: name,
        });
        const threads = await this.data.threads.getAllByCriteria({
            CategoryId: catObj.id,
        });
        return threads;
    }

    async getAllPostsbyId(arr) {
        const result = Promise.all(arr.map(async(thread) => {
            let posts = await this.data.posts.getAllByCriteria({
                ThreadId: +thread.id,
            });
            posts = posts
                .map((post) => post.dataValues)
                .sort((a, b) => b.createdAt < a.createdAt);

            posts = await Promise.all(posts.map(async(post) => {
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
    async createThread(obj) {
        return this.data.threads.create(obj);
    }
    async createPost(obj) {
        return this.data.posts.create(obj);
    }
}

module.exports = CategoriesController;