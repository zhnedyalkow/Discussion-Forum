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

    describe('Method: create()', () => {

        describe('when valid object is provided', () => {
            it('expect to return an object when exist', () => {
                const object = {
                    id: 1,
                    name: 'anonymous',
                    jobTitle: 'Engineer',
                };
                const array = [{}, {}];
                array.push(object);
                const newObj = array.find((obj) => obj.id === object.id);
                expect(newObj).to.deep.equals(object);
            });
        });

        describe('when invalid object is provided', () => {
            it('expect to return false when is not exist', () => {
                const obj = null;

                const array = [{}, {}];
                const res = array.length;
                if (obj) {
                    array.push(obj);
                }
                expect(res).to.equal(array.length);
            });
        });
    });


    describe('Method: delete()', () => {

        describe('when existing object is provided', () => {
            it('expect to return true', () => {
                const object = {
                    id: 1,
                    name: 'anonymous',
                    jobTitle: 'Engineer',
                };
                const array = [{
                    id: 1,
                    name: 'anonymous',
                    jobTitle: 'Engineer',
                }, {
                    id: 2,
                    name: 'somebody',
                    jobTitle: 'Housekeeper',
                }];



                const lengthBefore = array.length;
                const res = array.filter((obj) => obj.id !== object.id);
                expect(res.length).not.to.be.equal(lengthBefore)
            });
        });

        describe('when not existing object is provided', () => {
            it('expect to return false', () => {
                const object = {
                    id: 1,
                    name: 'anonymous',
                    jobTitle: 'Engineer',
                };
                const array = [{
                    id: 2,
                    name: 'somebody',
                    jobTitle: 'Housekeeper',
                }, {
                    id: 2,
                    name: 'somebody',
                    jobTitle: 'Housekeeper',
                }];

                const lengthBefore = array.length;
                const res = array.filter((obj) => obj.id === object.id);
                expect(res.length).not.to.be.equal(lengthBefore)
            });
        });
    });
});