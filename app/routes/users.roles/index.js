const userRolesRoutes = require('./users.roles.route');

const init = (app, data) => {
    userRolesRoutes.init(app, data);
};

module.exports = {
    init,
};