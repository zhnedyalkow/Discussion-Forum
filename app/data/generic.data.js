class Data {
    constructor(Model, includes = []) {
        this.Model = Model;
        this.includes = this.includes;
    }

    getAll() {
        return this.Model.findAll();
    }

    getById(id) {
        return this.Model.findById(id, {
            includes: this.includes,
        });
    }

<<<<<<< HEAD
=======
    getAllByCriteria(findObj) {
        return this.Model.findAll({
            where: findObj,
        });
    }

>>>>>>> 80ef52e6081cc3a79b8fc78cfa691610612fb99d
    create(obj) {
        // validation
        if (this._isObjectValid && !this._isObjectValid(obj)) {
            throw new Error('Invalid object');
        }
        return this.Model.findOrCreate({
            where: obj,
        });
    }
}


module.exports = Data;