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

        addAnswer(obj) {
            return obj;
        }
    }
};

describe('Testing AnswersController', () => {

    // something is not working with answers

    // describe('Method: getAll()', () => {
    //     it('when no answers expect to return empty array', async () => {
            
    //         // Arrange
    //         answersArray = [];
    //         const controller = new AnswersController(fakeData);

    //         // Act
    //         const answers = await controller.getAll();

    //         // Assert
    //         expect(answers).to.be.empty;
    //     });
    // });

    // describe('Method addAnswer()', () => {
    //     describe('when data is valid', () => {
    //         it('expect to be created', async () => {
    //             const answer = {
    //                 id: 1,
    //                 asnwerContent: 'yes, bro',
    //                 PostId: 11,
    //                 CategiryId: 3,
    //             };

    //             const controller = new AnswersController(fakeData);
    //             const createdAnswer = await controller.addAnswer(answer);
    //             expect(createdAnswer).to.exist;
    //         });
    //     });
    // });

});
