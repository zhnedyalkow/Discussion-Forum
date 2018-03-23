const postRoutes = require('./posts.routes');

const init = (app, data) => {
    postRoutes.init(app, data);
};

module.exports = {
    init,
};