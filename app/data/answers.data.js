const Data = require('./generic.data');

const {
    Answers,
} = require('../../db/models');

class AnswersData extends Data {
    constructor() {
        super(Answers, []);
    }
}

module.exports = AnswersData;