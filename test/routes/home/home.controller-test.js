const {
    expect,
    should,
} = require('chai');

const HomeController = require('../../../app/routes/home/home.controller');

let categoriesArray = [];
let threadsArray = [];
let postsArray = [];
let usersArray = [];

const fakeData = {
    categories: {
        getAll() {
            return categoriesArray;
        },
    },
    threads: {
        getAllByCriteria(object) {
            const threadsCount = threadsArray.filter((obj) => obj.dataValues.id === object.CategoryId);
            return threadsCount;
        },
    },
    posts: {
        getAllByCriteria(object) {
            const res = postsArray.filter((obj) => obj.dataValues.id === object.ThreadId);
            return res;
        },
    },
    users: {
        getById(id) {
            return usersArray.find((obj) => obj.id === id);
        },
    }
};

describe('Testing HomeController', () => {
    describe('Method: getAllThreadsByCategoryId()', () => {
        it('when there are corresponding threads to that category', async () => {

            categoriesArray = [{
                id: 1,
            }]

            threadsArray = [{
                    dataValues: {
                        id: 1,
                        title: 'Windows',
                        content: 'old windows',
                        UserId: 1,
                        CategoryId: 1,
                        createdAt: 1,
                    }
                },
                {
                    dataValues: {
                        id: 1,
                        title: 'Windows',
                        content: 'broken old windows',
                        UserId: 1,
                        CategoryId: 1,
                        createdAt: 1,
                    }
                },
                {
                    dataValues: {
                        id: 2,
                        title: 'Old cars',
                        content: 'old broken cars',
                        UserId: 2,
                        CategoryId: 2,
                        createdAt: 2,
                    }
                }
            ];

            const controller = new HomeController(fakeData);
            const expectedResult = 2;
            const threads = await controller.getAllThreadsByCategoryId(categoriesArray);
            const numOfThreads = threads
                .map((arr) => arr.length)
                .reduce((len, sum) => sum + len, 0);

            expect(numOfThreads).to.be.equal(expectedResult);
        });
    });

    describe('getAllSortedPostsAndUsernameByThreadsId()', () => {
        it('when there are corresponding posts to that thread expect to be returned', async () => {

            usersArray = [{
                id: 1,
                username: 'gosho',
            }];

            threadsArray = [
                [{
                    id: 1,
                }]
            ];

            postsArray = [{
                    dataValues: {
                        id: 1,
                        title: 'Something',
                        content: 'Something about Javascript',
                        UserId: 1,
                        ThreadId: 1,
                        createdAt: '2018-03-18 08:19:42',
                    }
                },
                {
                    dataValues: {
                        id: 1,
                        title: 'Programmer\'s question',
                        content: 'Something about Javascript2',
                        UserId: 1,
                        ThreadId: 1,
                        createdAt: '2018-01-18 10:50:40',
                    }
                },
                {
                    dataValues: {
                        id: 2,
                        title: 'Old cars',
                        content: 'old broken parts',
                        UserId: 2,
                        ThreadId: 2,
                        createdAt: '2018-04-20 15:13:21',
                    }
                }
            ];

            const controller = new HomeController(fakeData);
            const expectedResult = 1;
            const posts = await controller.getAllSortedPostsAndUsernameByThreadsId(threadsArray);

            const numOfThreads = posts
                .map((arr) => arr.length)
                .reduce((len, sum) => sum + len, 0);

            expect(posts).to.exist;
            expect(posts.length).to.be.equal(expectedResult);

        });
        
        it('when there aren\'t corresponding posts to that thread expect to be returned empty array', async () => {
            usersArray = [{
                id: 1,
                username: 'gosho',
            }];

            threadsArray = [];
            postsArray = [];

            const controller = new HomeController(fakeData);
            const expectedResult = null;
            const posts = await controller.getAllSortedPostsAndUsernameByThreadsId(threadsArray);

            expect(posts).to.be.instanceOf(Array);
            expect(posts).to.be.empty;

        });
    });
});