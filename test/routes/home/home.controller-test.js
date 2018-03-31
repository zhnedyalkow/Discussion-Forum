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
            return postsArray.filter((obj) => obj.dataValues.id === object.ThreadId);
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
            const threads = await controller.getAllThreadsByCategoryId(categoriesArray);
            const numOfThreads = threads
                .map((arr) => arr.length)
                .reduce((len, sum) => sum + len, 0);

            expect(numOfThreads).to.be.equal(2);
        })
    })
});