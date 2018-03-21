const Data = require('./generic.data');

const {
    Threads,
} = require('../../db/models');

class ThreadsData extends Data {
    constructor() {
        super(Threads, []);
    }
}

module.exports = ThreadsData;