const threadRoutes = require('./threads.routes');

const init = (app, data) => {
    threadRoutes.init(app, data);
};

module.exports = {
    init,
};