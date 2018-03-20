const Data = require('./generic.data');

const {
    Posts,
} = require('../../db/models');

class PostsData extends Data {
    constructor() {
        super(Posts, []);
    }
}

module.exports = PostsData;