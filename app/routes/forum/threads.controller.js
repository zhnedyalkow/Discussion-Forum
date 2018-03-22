class ThreadsController {
    constructor(data) {
        this.data = data;
    }

    async getAll() {
        const threads = this.data.threads.getAll();
        return threads;
    }

    async getAllById(id) {
        return this.data.threads.getAllById(id);
    }
    async create(title, catId) {
        console.log(title, catId);
        await this.Model.create({
            where: {
                title: title,
                UserId: 2,
                CategoryId: catId,
            }
        });

    }
    async findThreadId(catId) {
        console.log('Thsi is the name ' + name);
        const result = await this.Model.findAll({
            where: {
                CategoryId: catId,
            }
        });
        return result[0].dataValues.id;
    }
}


module.exports = ThreadsController;