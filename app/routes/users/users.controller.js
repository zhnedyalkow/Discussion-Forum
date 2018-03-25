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

            // try {
        //     const user = await this.data.users.create(createObj);
        //     const isNew = user[user.length - 1];
        //     if (isNew) {
        //         return { success: true };
        //     }
        //     return false;
        // } catch (error) {
        //     return
        // }
}

module.exports = UsersController;