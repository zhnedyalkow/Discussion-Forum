const {
    expect,
} = require('chai');

const UsersController = require('../../../app/routes/users/users.controller');

let userArray = [];

const fakeData = {
    users: {
        findOrCreate(obj) {
            const user = userArray.find((user) => user.username === obj.username);
            if (user) {
                return [user, false];
            }
            return [user, true];
        },
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
        // it('if empty object is provided');
    });
});