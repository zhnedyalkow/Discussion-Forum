class UsersController {
    constructor(data) {
        this.data = data;
    }
    async register(createObj) {
        createObj.userRoleId = 2;
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

        const user = await this.data.users.create(createObj);
            const isNew = user[user.length - 1];
            if (isNew) {
                return { success: true };
            }
            return false;
    }
}

module.exports = UsersController;