const Data = require('./generic.data');
const {
    Users,
} = require('../../db/models');

class UsersData extends Data {
    constructor() {
        super(Users, []);
    }

    async create(obj) {
        if (this._isObjectValid && !this._isObjectValid(obj)) {
            throw new Error('Invalid object');
        }
        try {
            this.Model.findOrCreate({
                where: obj,
            });
        } catch (err) {
            console.log('Username or e-mail already exists.');
        }
    }
}

module.exports = UsersData;