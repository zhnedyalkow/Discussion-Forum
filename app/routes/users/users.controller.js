class UsersController {
    constructor(data) {
        this.data = data;
    }
    async register(createObj) {
        // createObj.userRoleId = 2;
        // const user = await this.data.users.create(createObj);
        // const isNew = user[user.length - 1];
        // if (isNew) {
        //     return true;
        // }
        // return false;

        createObj.userRoleId = 2;
<<<<<<< HEAD
        const user = await this.data.users.create(createObj);
        const isNew = user[user.length - 1];
        if (isNew) {
            return true;
=======
        try {
            const user = await this.data.users.create(createObj);
            const isNew = user[user.length - 1];
            if (isNew) {
                return {
                    success: true,
                    errors: [],
                };
            }
        } catch (error) {
            return {
                success: false,
                errors: [`Sorry, could not sign you up. 
                Please fill all fields correctly!`]
                    .concat(error.message
                    .split('Validation error: ')),
            };
>>>>>>> a584e24f789a786012cc50cce010212746170ff2
        }
    }
}

module.exports = UsersController;