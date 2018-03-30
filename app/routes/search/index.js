const searchRoutes = require('./search.routes');
const apiRoutes = require('./search.api.routes');

const init = (app, data) => {
    searchRoutes.init(app, data);
    apiRoutes.init(app, data);
};

module.exports = {
    init,
};