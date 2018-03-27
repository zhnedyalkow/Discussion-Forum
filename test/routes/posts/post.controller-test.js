const {
    expect,
    should,
} = require('chai');

const PostsController = require('../../../app/routes/posts/posts.controller');

let postsArray = [];


const fakeData = {
    posts: {
        getById(id) {
            return postsArray.find((post) => post.id === id);
        },

        getOneByCriteria(findObj) {
            return findObj.find((obj) => obj.name === name);
        },

        getAll() {
            return postsArray;
        },

        getAllByCriteria() {
            return postsArray.map((post) => post.title);
        },

        create(post) {
            return post;
        }
    }
};

const asyncFunc = async () => {
    return setTimeout(() => {
        throw new Error();
    }, 500);
};

describe('Testing PostsController', () => {
    describe('Method: getAll()', () => {
        it('when no posts expect to return empty array', async () => {
            
            // Arrange
            postsArray = [];
            const controller = new PostsController(fakeData);

            // Act
            const posts = await controller.getAll();

            // Assert
            expect(posts).to.be.empty;
        });
    });

    describe('Method: createPost()', () => {
        describe('when data is valid', () => {
            it('expect to be created', async () => {
                const post = {
                    id: 1,
                    title: 'New car',
                    content: 'My new ford fiesta is cool!',
                    usedId: 1,
                    threadId: 1,
                };

                const controller = new PostsController(fakeData);
                const createdPost = await controller.createPost(post);
                expect(createdPost).to.exist;
            });
        });
    });

 // Besically it works but only when in posts.controller ->  
        //addAnswer() -> this.data.posts.create(obj)


    // describe('Method: addAnswer()', () => {
    //     describe('when data is valid', () => {
    //         it('expect to be created', async () => {
    //             const answer = {
    //                 id: 1,
    //                 answerContent: 'yes, your car is really cool!',
    //                 PostId: 1,
    //                 UserId: 1,
    //             };

    //             const controller = new PostsController(fakeData);
    //             const createdAnswer = await controller.addAnswer(answer);
    //             expect(createdAnswer).to.exist;
    //         });
    //     });
    // });
});
