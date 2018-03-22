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


module.exports = {
    answers: new Data(Answers),
    categories: new Data(Categories),
    comments: new Data(Comments),
    posts: new Data(Posts),
    threads: new Data(Threads),
    userRoles: new Data(userRoles),
    users: new Data(Users),
};