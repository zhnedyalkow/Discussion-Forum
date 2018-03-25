class ThreadsController {
    constructor(data) {
        this.data = data;
    }

    async create(obj) {
        return this.data.threads.create(obj);
    }
}


module.exports = ThreadsController;