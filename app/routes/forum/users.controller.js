class UsersController {
    constructor(data) {
        this.data = data;
    }

    async getAll() {
        const users = this.data.users.getAll();
        return users;
    }
}

module.exports = UsersController;