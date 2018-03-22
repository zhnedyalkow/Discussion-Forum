class PostsController {
    constructor(data) {
        this.data = data;
    }

    async getAll() {
            const posts = this.data.posts.getAll();
            return posts;
        }
        // async create(post) {
        //     // console.log(name);
        //     await this.Model.create({
        //         where: {
        //             title: post,
        //         }
        //     });

    // }
    async create(id, title, post) {
        console.log(title);
        await this.Model.findOrCreate({
            where: {
                title: title,
                content: post,
                UserId: 3,
                ThreadId: id,
            }
        });

    }
}

module.exports = PostsController;