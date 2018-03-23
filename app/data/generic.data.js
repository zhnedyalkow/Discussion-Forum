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

    getAllByCriteria(findObj) {
        console.log('enter');
        console.log(findObj);
        return this.Model.findAll({
            where: findObj,
        });
    }

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