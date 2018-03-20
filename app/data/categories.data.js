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
}


module.exports = CategoriesData;