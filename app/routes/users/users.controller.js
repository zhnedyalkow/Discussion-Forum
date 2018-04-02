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

    /**
     * @description Finds all Answers by user id
     * @async
     * @param {Integer} id
     * receives an integer with the id of the user
     * @return {Array}
     * an array of all answers for that user
     */
    async getAllAnswersByUserId(id) {
        return this.data.answers.getAllByCriteria({
            UserId: +id,
        });
    }

    /**
     * @description Finds all Posts by user id
     * @async
     * @param {Integer} id
     * receives an integer with the id of the user
     * @return {Array}
     * an array of all posts for that user
     */
    async getAllPostsByUserId(id) {
        return this.data.posts.getAllByCriteria({
            UserId: +id,
        });
    }
}

module.exports = UsersController;