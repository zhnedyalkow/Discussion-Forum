class UsersController {
    constructor(data) {
        this.data = data;
    }

    /**
     * @description Creates a new user
     * @async
     * @param {Object} createObj
     * receives an object with the details of the new user
     * @return {Object}
     * an object with two params - success: boolean, errors: array
     */
    async register(createObj) {
        createObj.userRoleId = 2;
        try {
            const user = await this.data.users.findOrCreate(createObj);
            const isNew = user[user.length - 1];
            // return boolean -> true or false when is new
            if (isNew) {
                return {
                    success: true,
                    errors: [],
                };
            }
            throw new Error('username already exists');
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