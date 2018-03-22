const categoriesRoute = require('./categories.route');

const init = (app, data) => {
    categoriesRoute.init(app, data);
};

module.exports = {
    init,
};