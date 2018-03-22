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
    async create(title, catId) {
        console.log(title, catId);
        await this.Model.findOrCreate({
            where: {
                title: title,
                UserId: 3,
                CategoryId: catId,
            }
        });

    }
    async findThreadId(catId) {
        // console.log('Thsi is the name ' + name);
        const result = await this.Model.findAll({
            where: {
                CategoryId: +catId,
            }
        });
        console.log(result);
        console.log('-'.repeat(50));
        return result[0].dataValues.id;
    }
}


module.exports = ThreadsData;