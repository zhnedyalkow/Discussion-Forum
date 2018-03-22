class ThreadsController {
    constructor(data) {
        this.data = data;
    }

    async getAllThreadsByCatName(name) {
        const catObj = await this.data.categories.getAllByCriteria({
            catName: name,
        });
        const threads = await this.data.threads.getAllByCriteria({
            CategoryId: catObj[0].id,
        });
        return threads;
    }

    async getAllThreadsByCategoryId(arr) {
        const threadsCount = Promise.all(arr
            .map(async (cat) => {
                const result = await this.data.threads.getAllByCriteria({
                    CategoryId: +cat.id,
                });
                return result;
            }));
        return threadsCount;
    }
}


module.exports = ThreadsController;