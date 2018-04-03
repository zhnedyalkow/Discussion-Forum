const {
    expect,
    should,
} = require('chai');

const PostsController = require('../../../app/routes/posts/posts.controller');

let postsArray = [];
let answersArray = [];

const fakeData = {
    answers: {
        getAll() {
            return answersArray;
        },
        create(answer) {
            return answer;
        },
        delete(obj) {
            let deleteObjIndex;
            answersArray.forEach((item, index) => {
                if (item.id === obj.id) {
                    deleteObjIndex = index;
                    return;
                }
            });
            const deletedObj = answersArray.splice(deleteObjIndex, 1);
            return deletedObj;
        }
    },
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

describe('Testing PostsController', () => {
    describe('Method: getAllPosts()', () => {
        it('when no posts expect to return empty array', async () => {

            // Arrange
            postsArray = [];

            const controller = new PostsController(fakeData);

            // Act
            const posts = await controller.getAllPosts();

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

    describe('Method: createAnswer()', () => {
        describe('when data is valid', () => {
            it('expect to be created', async () => {
                const answer = {
                    id: 1,
                    content: 'Hello John!',
                };

                const controller = new PostsController(fakeData);
                const createdAnswer = await controller.createAnswer(answer);
                expect(createdAnswer).to.exist;
            });
        });
    });

    describe('Method: deleteAnswer()', () => {
        describe('when existing id is provided', () => {
            it('expect to reduce the length of existing array', async () => {

                const id = 2;

                answersArray = [{
                    id: 1,
                    name: 'answer1',
                }, {
                    id: 2,
                    name: 'answer2',
                }, {
                    id: 3,
                    name: 'answer3',
                }];

                const expectedLength = 2;

                const controller = new PostsController(fakeData);
                const deletedAnswer = await controller.deleteAnswer(id);

                expect(answersArray.length).to.be.equal(expectedLength);
                expect(deletedAnswer).to.exist;
            });
        });
    });

    describe('Method: getAllAnswers()', () => {
        describe('when non-empty answers array is provided', () => {
            it('expect the length of the array to equal the length of the original array',
                async () => {
                    answersArray = [{
                        id: 1,
                        name: 'answer1',
                    }, {
                        id: 2,
                        name: 'answer2',
                    }, {
                        id: 3,
                        name: 'answer3',
                    }];

                    const expectedLength = 3;

                    const controller = new PostsController(fakeData);

                    const answers = await controller.getAllAnswers();
                    expect(answers).to.exist;
                    expect(answers.length).to.equal(expectedLength);
                })
        })

        describe('when an empty answers array is provided', async () => {
            it('expect the array to be empty',
                async () => {
                    answersArray = [];

                    const controller = new PostsController(fakeData);

                    const answers = await controller.getAllAnswers();
                    expect(answers).to.exist;
                    expect(answers).to.be.empty;
                })
        })
    })
});