const Data = require('./generic.data');

const {
    Threads,
    Posts,
} = require('../../db/models');

class ThreadsData extends Data {
    constructor() {
        super(Threads, [Posts]);
    }

    getAllById(id) {
        const threads = this.Model.findAll({
            where: {
                CategoryId: +id,
            },
        });
        return threads;
    }
}


module.exports = ThreadsData;