const {
    Answers,
    Categories,
    Comments,
    Posts,
    Threads,
    userRoles,
    Users,
} = require('../../db/models');

const UsersData = require('./users.data');

const Data = require('./generic.data');
const CategoriesData = require('./categories.data');

module.exports = {
    answers: new Data(Answers),
    categories: new CategoriesData(Categories),
    comments: new Data(Comments),
    posts: new Data(Posts),
    threads: new Data(Threads),
    userRoles: new Data(userRoles),
    users: new UsersData(Users),
};