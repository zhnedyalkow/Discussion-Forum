const {
    Answers,
    Categories,
    Comments,
    Posts,
    Threads,
    userRoles,
    Users,
} = require('../../db/models');

const Data = require('./generic.data');
const CategoriesData = require('./categories.data');

// const obj = {
//     email,
//     username,
//     password,
//     firstName,
//     lastName,
//     userRole,
// }
// const create = (obj) => {
//     Users.findOrCreate({
//         where: obj,
//     });
// };
// console.log(Users);
module.exports = {
    answers: new Data(Answers),
    categories: new CategoriesData(Categories),
    comments: new Data(Comments),
    posts: new Data(Posts),
    threads: new Data(Threads),
    userRoles: new Data(userRoles),
    users: new Data(Users),
};