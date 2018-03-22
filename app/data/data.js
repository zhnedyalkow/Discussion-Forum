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
const AnswersData = require('./answers.data');
const CategoriesData = require('./categories.data');
const CommentsData = require('./comments.data');
const PostsData = require('./posts.data');
const ThreadsData = require('./threads.data');
const UsersData = require('./users.data');
const UserRolesData = require('./users.roles.data');


module.exports = {
    answers: new AnswersData(Answers),
    categories: new CategoriesData(Categories),
    comments: new CommentsData(Comments),
    posts: new PostsData(Posts),
    threads: new ThreadsData(Threads),
    userRoles: new UserRolesData(userRoles),
    users: new UsersData(Users),
};