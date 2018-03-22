class DataController {
    constructor(data) {
        this.data = data;
    }

    async getAllThreadsByCatName(name) {
        const catObj = await this.data.categories.getByCatName(name);
        const threads = await this.data.threads.getAllById(catObj.id);
        return threads;
    }

    async getAllThreadsByCategoryId(arr) {
        const threadsCount = Promise.all(arr
            .map(async (cat) => {
                const result = await this.data.threads.getAllById(cat.id);
                return result;
            }));
        return threadsCount;
    }

    async getAllPostsByThreadsId(nestedArr) {
        const postsCount = Promise.all(nestedArr.map(async (arr) => {
            const getPosts = await Promise.all(arr
                .map(async (thread) =>
                    await this.data.posts.getAllById(thread.id)));
            return getPosts;
        }));
        return postsCount;
    }

    async getLastPostByThreadId(arr) {
        arr = arr.map((post) => {
            // post.map((d)=>con(d[0].dataValues.createdAt));
            const sortArr = post.sort((a, b) =>
                b[0].dataValues.createdAt < a[0].dataValues.createdAt);
            // console.log(sortArr[0]);
            return sortArr[0][0].dataValues;
            // console.log(post);
        });
        return arr;
    }
    
    async getUserNames(arr) {
        const result = Promise.all(arr.map(async (user) => {
            const username = await this.data.users.getById(user.UserId);
            user.name = username.username;
            return user;
        }));
        return result;
    }

    async getAllPostsbyId(arr) {
        const result = Promise.all(arr.map(async (thread) => {
            let posts = await this.data.posts.getAllById(thread.id);
            posts = posts
                .map((post) => post.dataValues)
                .sort((a, b) => b.createdAt < a.createdAt);
            posts = await this.getUserNames(posts);
            return posts;
        }));
        return result;
    }
}


module.exports = DataController;