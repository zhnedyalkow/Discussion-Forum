const homeRoutes = require('./home.routes');
const apiRoutes = require('./home.api.routes');

const init = (app, data) => {
    homeRoutes.init(app, data);
    apiRoutes.init(app, data);
};

module.exports = {
    init,
};