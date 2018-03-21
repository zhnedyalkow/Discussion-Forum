const Data = require('./generic.data');

const {
    Comments,
} = require('../../db/models');

class CommentsData extends Data {
    constructor() {
        super(Comments, []);
    }
}

module.exports = CommentsData;