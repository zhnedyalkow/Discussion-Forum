const {
    expect,
    should,
} = require('chai');

const Data = require('../../app/data/generic.data');

describe('Testing class Data from generic data', () => {
    describe('Method: getAll()', () => {
        it('expect to return empty array', async () => {
            const Model = {
                findAll: () => [],
            };

            const data = new Data(Model);
            const actualData = await data.getAll();
            const expectedData = [];

            expect(actualData).to.deep.equal(expectedData);
        });
        it('expect to return given objects', async () => {
            const Model = {
                findAll: () => [1, 2, 3],
            };

            const data = new Data(Model);
            const actualData = await data.getAll();
            const expectedData = [1, 2, 3];

            expect(actualData).to.deep.equal(expectedData);
        });
    });

    describe('Method: getById()', () => {
        describe('when invalid object is provided', () => {
            it('expect to return null', async () => {

                const Model = {
                    findById: () => null,
                };

                const data = new Data(Model);
                const actualData = await data.getById();
                const expectedData = null;

                expect(actualData).to.deep.equal(expectedData);
            });
        });
        describe('when valid object is provided', () => {
            it('expect to return desired object', async () => {
                const obj = {
                    id: 2,
                };

                const Model = {
                    findById: () => obj,
                };

                const data = new Data(Model);
                const actualData = await data.getById(2);
                const expectedData = obj;

                expect(actualData).to.deep.equal(expectedData);
            });
        });
    });

    describe('Method: getOneByCriteria()', () => {
        describe('when invalid object is provided', () => {
            it('expect to return null', async () => {
                const Model = {
                    findOne: () => null,
                };

                const data = new Data(Model);
                const actualData = await data.getOneByCriteria();
                const expectedData = null;

                expect(actualData).to.deep.equal(expectedData);
            });
        });

        describe('when valid object is provided', () => {
            it('expect to return desired object', () => {
                const obj = {
                    name: 'anonymous',
                };

                const Model = {
                    findOne: () => obj,
                };

                const data = new Data(Model);
                const actualData = data.getOneByCriteria(obj);
                const expectedData = {
                    name: 'anonymous',
                };

                expect(actualData).to.deep.equal(expectedData);
            });
        });

    });

    describe('Method: getAllByCriteria()', () => {
        describe('when invalid object is provided', () => {
            it('expect to return null', () => {

                const Model = {
                    findAll: () => null,
                };

                const data = new Data(Model);
                const actualData = data.getAllByCriteria();
                const expectedData = null;

                expect(actualData).to.deep.equal(expectedData);
            });

            describe('when valid object is provided', () => {
                it('expect to return desired object', () => {
                    const obj = {
                        id: 1,
                        name: 'anonymous',
                        jobTitle: 'Engineer',
                    };

                    const Model = {
                        findAll: () => obj,
                    };

                    const data = new Data(Model);
                    const actualData = data.getAllByCriteria(obj);
                    const expectedData = {
                        id: 1,
                        name: 'anonymous',
                        jobTitle: 'Engineer',
                    };

                    expect(actualData).to.deep.equal(expectedData);
                });
            });
        });
    });

    // describe('Method: create()', () => {
    //     describe('when valid object is provided', () => {
    //         it('expect to return an object when exist', () => {
    //             const obj = {
    //                 id: 1,
    //                 name: 'anonymous',
    //                 jobTitle: 'Engineer',
    //             };

    //             const Model = {
    //                 findAll: () => obj,
    //             };

    //             const data = new Data(Model);
    //             const actualData = await data.getAllByCriteria(obj);
    //             const expectedData = {
    //                 id: 1,
    //                 name: 'anonymous',
    //                 jobTitle: 'Engineer',
    //             };

    //             expect(actualData).to.deep.equal(expectedData);
    //         });


    //         describe('when pass an object', () => {
    //             it('expect to throw an Error', () => {
    //                 const obj = {};
    //                 const Model = {
    //                     findAll: () => null,
    //                 };

    //                 const data = new Data(Model);
    //                 const actualData = data.create();
    //                 const expectedData = null;
    //             });
    //         });

    //         describe('when valid object is provided', () => {
    //             it('expect to check if exist, if empty, then create', () => {
    //                 const obj = {};

    //                 const Model = {
    //                     create: () => obj,
    //                 };

    //                 const data = new Data(Model);
    //                 const actualData = data.create(obj);
    //                 const expectedData = 'object';

    //                 expect(typeof actualData).to.be.equal(expectedData);
    //             });
    //         });
    //     });
    // });
});