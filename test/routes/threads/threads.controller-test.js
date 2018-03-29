const {
    expect,
    should,
} = require('chai');
const ThreadsController = require('../../../app/routes/threads/threads.controller');
const data = {
    threads: {
        create() {
            return [];
        },

    }
}
describe('Testing class Threads methods', () => {
    describe('Method: create()', () => {
        it('check threads.controller.getAll, when no => empty array', async() => {
            // arrange
            const controller = new ThreadsController(data);
            // act
            const threads = await controller.create();
            // assert
            expect(threads).to.be.empty;
        });
    });
});