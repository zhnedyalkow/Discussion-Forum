const commentsRoutes = require('./comments.route');

const init = (app, data) => {
    commentsRoutes.init(app, data);
};

module.exports = {
    init,
};