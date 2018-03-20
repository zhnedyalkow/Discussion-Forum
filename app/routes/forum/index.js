const forumRoutes = require('./forum.routes');
const init = (app, data) => {
    forumRoutes.init(app, data);
};

module.exports = {
    init,
};