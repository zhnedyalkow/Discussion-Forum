'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Categories', [{
                id: 1,
                catName: 'Веломеханик',
                description: 'Форум за въпроси, свързани с поддръжката и ремонта на велосипедите. Примерно: Как да си оправя кормилото?',
                createdAt: '2018-03-18 08:19:42',
                updatedAt: '2018-03-18 08:20:50',
            },
            {
                id: 2,
                catName: 'Сериали - Връзки и Рикуести',
                description: 'Рейчъл и Рос отново заедно?!? Доктор Кокс е най-лудия доктор който познаваш?!?',
                createdAt: '2018-03-18 08:19:42',
                updatedAt: '2018-03-18 08:20:50',
            },
            {
                id: 3,
                catName: 'e-Government',
                description: 'Тук всеки гражданин има възможността да изкаже своето лично мнение относно българското електронно правителство.',
                createdAt: '2018-03-18 08:19:42',
                updatedAt: '2018-03-18 08:20:50',

            }, {
                id: 4,
                catName: 'Софтуер (дискусии)',
                description: 'Строши ли се тъпия WinBooz ? Някъде изчезна My Computer ? Споделете болката си с нас - може да не ви помогнем, но ще ви изслушаме ;)',
                createdAt: '2018-03-18 08:19:42',
                updatedAt: '2018-03-18 08:20:50',
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Categories', null, {});
    }
};