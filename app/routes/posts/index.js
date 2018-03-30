const postRoutes = require('./posts.routes');
const apiRoutes = require('./posts.api.routes');

const init = (app, data) => {
    postRoutes.init(app, data);
    apiRoutes.init(app, data);
};

module.exports = {
    init,
};