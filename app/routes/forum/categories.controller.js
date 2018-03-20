class CategoriesController {
    constructor(data) {
        this.data = data;
    }

    async getAll() {
        const categories = this.data.categories.getAll();
        return categories;
    }

    // async create() {}

    // async delete() {}
}

module.exports = CategoriesController;