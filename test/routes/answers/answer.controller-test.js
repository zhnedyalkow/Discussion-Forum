const {
    expect,
    should,
} = require('chai');

const AnswersController = require('../../../app/routes/answers/answer.controller');

let answersArray = [];


const fakeData = {
    answers: {
        getById(id) {
            return answersArray.find((answer) => answer.id === id);
        },

        getOneByCriteria(findObj) {
            return findObj.find((obj) => obj.name === name);
        },

        getAll() {
            return answersArray;
        },

        getAllByCriteria() {
            return answerArray.map((answer) => answer.title);
        },

        create(answer) {
            return answer;
        }
    }
};

describe('Testing PostsController', () => {
    describe('Method: getAll()', () => {
        it('when no posts expect to return empty array', async () => {
            
            // Arrange
            answersArray = [];
            const controller = new AnswersController(fakeData);

            // Act
            const answers = await controller.getAll();

            // Assert
            expect(answers).to.be.empty;
        });
    });

});
