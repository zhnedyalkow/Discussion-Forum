const {
    expect,
} = require('chai');

const CategoriesController = require('../../../app/routes/categories/categories.controller');

let categoriesArray = [];
let threadsArray = [];
let postsArray = [];
let usersArray = [];


const fakeData = {
    categories: {
        getOneByCriteria(name) {
            const category = categoriesArray.find((cat) => cat.catName === name.catName);
            return category.id;
        },
        create(obj) {
            return obj;
        }
    },
    threads: {
        getAllByCriteria(object) {
            return threadsArray.filter((obj) => obj.id === object.id);
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
}

describe('Testing CategoriesController', () => {
    describe('Method getAllThreadsByCatName', () => {
        describe('when catname is valid', () => {
            it('expect to return all threads by specific cat name', async () => {
                categoriesArray = [{
                    catName: 'cars',
                    id: 1,
                    getAllThreadsByCatName() {},
                    getAllPostsbyId() {},

                }];
                threadsArray = [{
                    title: 'old cars',
                    catId: 1,
                }, {
                    title: 'new cars',
                    catId: 1,
                }, {
                    title: 'roses',
                    catId: 2,
                }];

                const controller = new CategoriesController(fakeData);
                const expectedLength = 3;

                const threads = await controller.getAllThreadsByCatName('cars');
                expect(threads).to.exist;
                expect(threads.length).to.equal(expectedLength);
            });
        })

        describe('when catname is valid', () => {
            it('expect to return undefined by different cat name', async () => {
                categoriesArray = [{
                    catName: 'garden',
                    id: 3,
                    getAllThreadsByCatName() {},
                    getAllPostsbyId() {},

                }];
                threadsArray = [{
                    title: 'old cars',
                    catId: 1,
                }, {
                    title: 'new cars',
                    catId: 1,
                }, {
                    title: 'garden',
                    catId: 2,
                }];

                const controller = new CategoriesController(fakeData);
                const expectedLength = 1;

                const threads = await controller.getAllThreadsByCatName('garden');
                expect(threads.length).not.to.equal(expectedLength);
            });
        })
    });

    describe('Method: createCategory()', () => {
        describe('when data is valid', () => {
            it('expect to be created', async () => {
                const category = {
                    id: 1,
                    catName: 'Garden',
                    description: 'Flowers'
                };

                const controller = new CategoriesController(fakeData);
                const createdCategory = await controller.createCategory(category);
                expect(createdCategory).to.exist;
            });
        });

        describe('when data is invalid', () => {
            it('expect to return null / undefined', async () => {
                const category = {};

                const controller = new CategoriesController(fakeData);
                const createdCategory = await controller.createCategory(category);
                expect(createdCategory).to.be.empty;
            });
        });
    });

    describe('Method: getAllPostsbyId()', () => {
        describe('when existing arr with threads is provided', () => {
            it('expect to return corresponding array with objects', async () => {

                usersArray = [{
                    id: 1,
                    username: 'valio'
                }];

                threadsArray = [{
                    id: 1,
                    title: 'Cars',
                    UserId: 1,
                }];

                postsArray = [{
                        dataValues: {
                            id: 1,
                            title: 'Windows',
                            content: 'old windows',
                            UserId: 1,
                            ThreadId: 1,
                            createdAt: 1,
                        }
                    },
                    {
                        dataValues: {
                            id: 1,
                            title: 'Windows',
                            content: 'broken old windows',
                            UserId: 1,
                            ThreadId: 1,
                            createdAt: 1,
                        }
                    },
                    {
                        dataValues: {
                            id: 2,
                            title: 'Old cars',
                            content: 'old broken cars',
                            UserId: 2,
                            ThreadId: 2,
                            createdAt: 2,
                        }
                    }
                ];

                const controller = new CategoriesController(fakeData);
                const posts = await controller.getAllPostsbyId(threadsArray);
                const expectedLength = 2;
                const postsLength = posts
                    .map((arr) => arr.length)
                    .reduce((len, sum) => sum + len, 0);
                expect(postsLength).to.be.equal(expectedLength);
            });
        });
    });
});