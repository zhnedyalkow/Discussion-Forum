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
}

module.exports = PostsData;