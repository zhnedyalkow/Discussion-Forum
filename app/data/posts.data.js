const Data = require('./generic.data');

const {
    Posts,
} = require('../../db/models');

class PostsData extends Data {
    constructor() {
        super(Posts, []);
    }

    getAllById(id) {
        const posts = this.Model.findAll({
            where: {
                ThreadId: +id,
            },
        });
        return posts;
    }
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

module.exports = PostsData;