const db = require('../../db/models');
const { Users } = db;
const create = (email, username, password, firstName, lastName, userRole) => {
    Users.findOrCreate({
        where: {
            email: email,
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName,
            userRoleId: 2,
        },
    });
};
// console.log(Users);
module.exports = {
    create,
};