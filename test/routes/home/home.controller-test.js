const {
    expect,
    should,
} = require('chai');

const HomeController = require('../../../app/routes/home/home.controller');

let categoriesArray = [];

const fakeData = {
    categories: {

        getAll() {
            return categoriesArray;
        },
    }
};


describe('Testing HomeController', () => {
    describe('Method: getAll()', () => {
        it('when no posts expect to return empty array', async () => {

            // Arrange
            categoriesArray = [];

            const controller = new HomeController(fakeData);

            // Act
            const categories = await controller.getAll();

            // Assert
            expect(categories).to.be.empty;
        });
    });
});