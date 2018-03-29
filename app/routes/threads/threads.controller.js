class ThreadsController {
    constructor(data) {
        this.data = data;
    }

    async getById(id) {
        const threads = this.data.threads.getById();
        return threads;
    }

    async getAll() {
        const threads = this.data.threads.getAll();
        return threads;
    }

    async create(obj) {
        return this.data.threads.create(obj);
    }
}


module.exports = ThreadsController;