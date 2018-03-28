const {
    expect,
} = require('chai');

const UsersController = require('../../../app/routes/users/users.controller');

let userArray = [];

const fakeData = {
    users: {
        register(obj) {
            const isNew = user[user.length - 1];
            if (isNew) {
                return {
                    success: true,
                    errors: [],
                }
            }
            // return false;
        },
        create(obj) {
            return obj;
        }
    }
};

describe('Testing UsersController', () => {
    describe('Method register()', () => {
        it('if new return success: true', () => {
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

            try {
                const user = await controller.register(obj);
                console.log(user);

                // expect(user).to.exist;

                expect(user).to.deep.eq({
                    success: true,
                    errors: [],
                });

            } catch (err) {
                console.log(err);
            }
        });
    });
});