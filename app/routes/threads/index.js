const threadRoutes = require('./threads.routes');
const apiRoutes = require('./thread.api.routes');


const init = (app, data) => {
    threadRoutes.init(app, data);
    apiRoutes.init(app, data);
};

module.exports = {
    init,
};