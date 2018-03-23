class UsersController {
    constructor(data) {
        this.data = data;
    }
    async register(createObj) {
        createObj.userRoleId = 2;
        const user = await this.data.users.create(createObj);
        const isNew = user[user.length - 1];
        if (isNew) {
            return true;
        }
        return false;
    }
}

module.exports = UsersController;