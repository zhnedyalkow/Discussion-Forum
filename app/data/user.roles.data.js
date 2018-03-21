const Data = require('./generic.data');

const {
    userRoles,
} = require('../../db/models');

class userRolesData extends Data {
    constructor() {
        super(userRoles, []);
    }
}

module.exports = userRolesData;