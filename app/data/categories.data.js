const Data = require('./generic.data');
const {
    Answers,
    Categories,
    Comments,
    Posts,
    Threads,
    userRoles,
    Users,
} = require('../../db/models');

class CategoriesData extends Data {
    constructor() {
        super(Categories, [Threads]);
    }
    getByCatName(name) {
        const categories = this.Model.find({
            where: {
                catName: name,
            },
        });
        return categories;
    }
    async create(name, description) {

        await this.Model.findOrCreate({
            where: {
                catName: name,
                description: description,
            }
        });

    }
    async findCatId(name) {
        console.log('Thsi is the name ' + name);
        const result = await this.Model.findAll({
            where: {
                catName: name,
            }
        });
        return result[0].dataValues.id;
    }
}


module.exports = CategoriesData;