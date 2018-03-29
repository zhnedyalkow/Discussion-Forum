const searchRoute = require('./search.route');

const init = (app, data) => {
    searchRoute.init(app, data);
};

module.exports = {
    init,
};