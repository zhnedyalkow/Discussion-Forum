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
        const result = Promise.all(arr.map(async (thread) => {
            let posts = await this.data.posts.getAllByCriteria({
                ThreadId: +thread.id,
            });
            posts = posts
                .map((post) => post.dataValues)
                .sort((a, b) => b.createdAt < a.createdAt);

            console.log(posts);
            posts = await Promise.all(posts.map(async (post) => {
                // const username = await this.data.users.getById(post.UserId);
                console.log(post);
                const userId = post.UserId;
                const username = await this.data.users.getById(userId);
                post.username = username.username;
                return post;
            }));

            return posts;
        }));
        return result;
    }

    async createCategory(obj) {
        const categories = this.data.categories.create(obj);
        return categories;
        // try {
        //     const categories = this.data.categories.create(obj);
        //     if (categories) {
        //         return {
        //             successs: true,
        //             errors: [],
        //         };
        //     }
        //     throw new Error('category already exists');
        // } catch (error) {
        //     return {
        //         success: false,
        //         errors: [`Please fill all fields correctly!`]
        //                     .concat(error.message
        //                     .split('Validation error: ')),
        //     };
        // }
    }
}

module.exports = CategoriesController;