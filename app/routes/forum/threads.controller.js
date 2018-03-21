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
}


module.exports = ThreadsController;