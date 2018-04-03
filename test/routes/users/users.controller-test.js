const {
    expect,
} = require('chai');

const UsersController = require('../../../app/routes/users/users.controller');

let userArray = [];
let answersArray = [];
let postsArray = [];

const fakeData = {
    users: {
        findOrCreate(obj) {
            const user = userArray.find((user) => user.username === obj.username);
            if (user) {
                return [user, false];
            }
            return [user, true];
        },
    },
    answers: {
        getAllByCriteria(object) {
            return answersArray.filter((obj) => obj.UserId === object.UserId);
        }
    },
    posts: {
        getAllByCriteria(object) {
            return postsArray.filter((obj) => obj.UserId === object.UserId);
        }
    }
};

describe('Testing UsersController', () => {
    describe('Method register()', () => {

        it('if new user\'s name doesn\'t already exist', async () => {
            userArray = [{
                id: 1,
                email: 'someone@abv.bg',
                username: 'someone',
                password: 123456,
                firstName: 'John',
                lastName: 'Kennedy',
                userRoleId: 2,
            }, ];

            const obj = {
                id: 2,
                email: 'somebody@abv.bg',
                username: 'newUser',
                password: 123456,
                firstName: 'Janny',
                lastName: 'Jane',
                userRoleId: 2,
            };
            const controller = new UsersController(fakeData);
            const isNew = await controller.register(obj);

            expect(isNew).to.deep.equals({
                success: true,
                errors: [],
            });

        });
        it('if new user\'s username exists', async () => {
            userArray = [{
                id: 1,
                email: 'someone@abv.bg',
                username: 'someone',
                password: 123456,
                firstName: 'John',
                lastName: 'Kennedy',
                userRoleId: 2,
            }, ];

            const obj = {
                id: 2,
                email: 'somebody@abv.bg',
                username: 'someone',
                password: 123456,
                firstName: 'Janny',
                lastName: 'Jane',
                userRoleId: 2,
            };
            const controller = new UsersController(fakeData);
            const isNew = await controller.register(obj);
            expect(isNew.success).to.be.false;
        })
    });

    describe('Method getAllAnswersByUserId()', () => {
        it('when answersArray is not empty', async () => {
            answersArray = [{
                id: 1,
                content: 'lorem ipsum',
                UserId: 2,
            }, {
                id: 2,
                content: 'lorem ipsum',
                UserId: 2,
            }, {
                id: 2,
                content: 'lorem ipsum',
                UserId: 2,
            }, {
                id: 1,
                content: 'lorem ipsum',
                UserId: 1,
            }, ];

            const id = 2;
            const expectedLength = 3;
            const controller = new UsersController(fakeData);
            const answers = await controller.getAllAnswersByUserId(id);

            expect(answers).to.exist;
            expect(answers).to.be.instanceof(Array);
            expect(answers.length).to.equal(expectedLength);
        })
    })

    describe('Method getAllPostsByUserId()', () => {
        it('when postsArray is not empty', async () => {
            postsArray = [{
                id: 1,
                title: 'title',
                content: 'lorem ipsum',
                UserId: 2,
            }, {
                id: 2,
                title: 'title',
                content: 'lorem ipsum',
                UserId: 2,
            }, {
                id: 2,
                title: 'title',
                content: 'lorem ipsum',
                UserId: 2,
            }, {
                id: 1,
                content: 'lorem ipsum',
                UserId: 1,
            }, ];

            const id = 2;
            const expectedLength = 3;
            const controller = new UsersController(fakeData);
            const posts = await controller.getAllPostsByUserId(id);

            expect(posts).to.exist;
            expect(posts).to.be.instanceof(Array);
            expect(posts.length).to.equal(expectedLength);
        })
    })
});