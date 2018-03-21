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
}


module.exports = CategoriesData;