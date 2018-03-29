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
        getOneByCriteria (name) {
            // console.log(`Category ->`);
            // console.log(categoriesArray.find((canpmt) => cat.catName === name.catName));
            const category = categoriesArray.find((cat) => cat.catName === name.catName);
            return category.id;
        },
        create(obj) {
            console.log(obj);
            return obj;
        }
    },
    threads: {
        getAllByCriteria (object) {
            // console.log();
            // console.log(`getAllByCriteria -> object: `);
            // console.log(object);
            // console.log(`getAllByCriteria -> threadsArrayFilter:`);
            // console.log(threadsArray.filter((obj) => obj.id === object.id));
            return threadsArray.filter((obj) => obj.id === object.id);
        },
    },
    posts: {
        getAllByCriteria () {
            return postsArray.filter((obj) => obj.id === id);
        },
    },
    users: {
        getById (id) {
            return 'valio';
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

                // console.log(await controller.getAllThreadsByCatName('garden'));
                const threads = await controller.getAllThreadsByCatName('garden');
                expect(threads.length).not.to.equal(expectedLength);
            });
        })
    });
    describe('Method: create()', () => {
        describe('when data is valid', () => {
            it('expect to be created', async () => {
                const category = {
                    id: 1,
                    catName: 'Garden',
                    description: 'Flowers'
                };

                const controller = new CategoriesController(fakeData);
                const createdCategory = await controller.create(category);
                expect(createdCategory).to.exist;
            });
        });

        describe('when data is invalid', () => {
           it('expect to return null / undefined', async () => {
            const category = {};

            const controller = new CategoriesController(fakeData);
            const createdCategory = await controller.create(category);
            expect(createdCategory).to.be.empty;
           }); 
        });
    });
})