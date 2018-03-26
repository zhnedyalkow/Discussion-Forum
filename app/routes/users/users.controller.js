class UsersController {
    constructor(data) {
        this.data = data;
    }
    async register(createObj) {
        createObj.userRoleId = 2;
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
        }
    }
}

module.exports = UsersController;