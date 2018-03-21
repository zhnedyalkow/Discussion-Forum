class ThreadsController {
    constructor(data) {
        this.data = data;
    }

    async getAll() {
        const threads = this.data.threads.getAll();
        return threads;
    }
}

module.exposts = ThreadsController;