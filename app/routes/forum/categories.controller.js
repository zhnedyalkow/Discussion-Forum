class CategoriesController {
    constructor(data) {
        this.data = data;
    }

    async getAll() {
        const categories = this.data.categories.getAll();
        return categories;
    }
    async create(name, description) {
        console.log(name);
        await this.Model.create({
            where: {
                catName: name,
                description: description,
            }
        });

    }
    async findCatId(name) {
        // console.log('Thsi is the name ' + name);
        // const result = await this.Model.findAll({
        //     where: {
        //         catName: name,
        //     }
        // });
        // console.log(result);
        // return result;
    }
    async create() {}

    async delete() {}
}

module.exports = CategoriesController;