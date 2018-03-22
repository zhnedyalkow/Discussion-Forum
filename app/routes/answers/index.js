const answersRoute = require('./answers.route');

const init = (app, data) => {
    answersRoute.init(app, data);
};

module.exports = {
    init,
};