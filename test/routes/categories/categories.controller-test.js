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
            const category = categoriesArray.find((cat) => cat.catName === name);
            // console.log(category);
            return category.id;
        },
    },
    threads: {
        getAllByCriteria (object) {
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

                const threads = await controller.getAllThreadsByCatName('cars');
                expect(threads).to.exist;
                // expect(threads.length).to.equal(2);
            })
        })
    })
})