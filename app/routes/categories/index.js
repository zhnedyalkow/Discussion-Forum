const categoriesRoutes = require('./categories.routes');
const apiRoutes = require('./categories.api.routes');

const init = (app, data) => {
    categoriesRoutes.init(app, data);
    apiRoutes.init(app, data);
};

module.exports = {
    init,
};