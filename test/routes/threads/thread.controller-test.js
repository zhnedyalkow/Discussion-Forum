const {
    expect,
    should,
} = require('chai');

const ThreadsController = require('../../../app/routes/threads/threads.controller');

let threadsArray = [];

const fakeData = {
    threads: {
        getById(id) {
            const foundItem = threadsArray.find((thread) => thread.id === id);
            if (!foundItem) {
                return [];
            }
            return foundItem;
        },

        getOneByCriteria(findObj) {
            return findObj.find((obj) => obj.name === name);
        },

        getAll() {
            return threadsArray;
        },

        getAllByCriteria() {
            return threadsArray.map((thread) => thread.title);
        },

        create(thread) {
            return thread;
        }
    }
};

describe('Testing ThreadsController', () => {
    describe('Method getAll()', () => {
        it('when no threads expect to return empty array', async() => {
            threadsArray = [];
            const controller = new ThreadsController(fakeData);
            const threads = await controller.getAll();
            expect(threads).to.be.empty;
        });
    });

    describe('Method create()', () => {
        describe('when data is valid', () => {
            it('expect to be created', async () => {
                const thread = {
                    id: 1,
                    title: 'New Cars',
                    UserId: 1,
                    CategiryId: 2,
                };

                const controller = new ThreadsController(fakeData);
                const createdThread = await controller.create(thread);
                expect(createdThread).to.exist;
            });
        });
    });

    describe('Method: getById()', () => {
        describe('when valid obj is provided', () => {
            it('expect to return the passed obj', async () => {
                
                const id = 1;

                const threadsArray = [{
                    id,
                    title: 'New Cars',
                    UserId: 1,
                    CategiryId: 2,
                }];

                const controller = new ThreadsController(fakeData);
                const thread = await controller.getById(id);
                
                expect(thread).to.exist;
                expect(thread).to.be.instanceOf(Array).and.not.to.include(null);
                // expect(thread.id).to.deep.equal(id);
            });
        });
    });
});
