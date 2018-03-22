class UsersController {
    constructor(data) {
        this.data = data;
    }
    async register(createObj) {
        createObj.userRoleId = 2;
        const user = await this.data.users.create(createObj);
        if (user[0].options) {
            console.log('true');
            return true;
        }
        return false;
    }
}

module.exports = UsersController;