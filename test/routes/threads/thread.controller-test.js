const {
    expect,
    should,
} = require('chai');

const ThreadsController = require('../../../app/routes/threads/threads.controller');

let categoriesArray = [];
let threadsArray = [];
let answersArray = [];
let postsArray = [];
let users = [];

const fakeData = {
    threads: {
        create(thread) {
            return thread;
        }
    },
    answers: {
        getAll() {
            return answersArray;
        },
    },
    users: {
        getAll() {
            return usersArray;
        },
    },
    posts: {
        create(post) {
            return post;
        },

        getAllByCriteria(findObj) {
            const id = findObj.ThreadId;
            const foundItem = postsArray.filter((obj) => obj.id === id);
            return foundItem;
        },
    },
    categories: {
        getOneByCriteria(findObj) {
            const foundItem = categoriesArray.find((obj) => obj.name === findObj.catName);
            if (!foundItem) {
                return [];
            }
            return foundItem;
        },
    }
};

describe('Testing ThreadsController', () => {
    describe('Method getAllAnswers()', () => {
        it('when no threads expect to return empty array', async () => {
            answersArray = [];
            const controller = new ThreadsController(fakeData);
            const answers = await controller.getAllAnswers();
            expect(answers).to.be.empty;
        });
    });

    describe('Method getAllUsers()', () => {
        it('when no threads expect to return empty array', async () => {
            usersArray = [];
            const controller = new ThreadsController(fakeData);
            const users = await controller.getAllUsers();
            expect(users).to.be.empty;
        });
    });

    describe('Method createThread()', () => {
        describe('when data is valid', () => {
            it('expect to be created', async () => {
                const thread = {
                    id: 1,
                    title: 'New Cars',
                    UserId: 1,
                    CategiryId: 2,
                };

                const controller = new ThreadsController(fakeData);
                const createdThread = await controller.createThread(thread);
                expect(createdThread).to.exist;
            });
        });
    });

    describe('Method createPost()', () => {
        describe('when data is valid', () => {
            it('expect to be created', async () => {
                const post = {
                    id: 1,
                    title: 'I want new car',
                    UserId: 1,
                    ThreadId: 2,
                };

                const controller = new ThreadsController(fakeData);
                const createdPost = await controller.createPost(post);
                expect(createdPost).to.exist;
            });
        });
    });

    describe('Method: getCategoryByCatName()', () => {
        describe('when existing catName is provided', () => {
            it('expect to return the corresponding obj', async () => {

                const name = 'car';

                const threadsArray = [{
                    id: 1,
                    name: 'car',
                    UserId: 1,
                    CategiryId: 2,
                }];

                const controller = new ThreadsController(fakeData);
                const thread = await controller.getCategoryByCatName(name);

                expect(thread).to.exist;
                expect(thread).to.be.instanceOf(Array).and.not.to.include(null);
            });
        });
    });

    describe('Method: getAllPostsByThreadId()', () => {
        describe('when existing id is provided', () => {
            it('expect to return the corresponding obj', async () => {

                const id = 1;

                postsArray = [{
                    id: 1,
                    name: 'post1',
                }, {
                    id: 1,
                    name: 'post2',
                }, {
                    id: 1,
                    name: 'post3',
                }];

                const controller = new ThreadsController(fakeData);
                const posts = await controller.getAllPostsByThreadId(id);
                const expectedLength = 3;

                expect(posts).to.be.instanceOf(Array);
                expect(posts.length).to.equal(expectedLength);
            });
        });


        describe('when not existing id is provided', () => {
            it('expect to return empty array', async () => {

                const id = 2;

                postsArray = [{
                    id: 1,
                    name: 'post1',
                }, {
                    id: 1,
                    name: 'post2',
                }, {
                    id: 1,
                    name: 'post3',
                }];

                const controller = new ThreadsController(fakeData);
                const posts = await controller.getAllPostsByThreadId(id);
                const expectedLength = 3;

                expect(posts).to.be.instanceOf(Array);
                expect(posts).to.be.empty;
            });
        });
    });
});