const usersRoutes = require('./users.route');

const init = (app, data) => {
    usersRoutes.init(app, data);
};

module.exports = {
    init,
};