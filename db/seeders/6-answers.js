'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Answers', [{
                id: 1,
                answerContent: 'Във всеки по-нормален магазин/сервиз има такива ,виж в Allmountain,Dragzone,Bike Center',
                createdAt: '2018-03-18 08:19:42',
                updatedAt: '2018-03-18 08:20:50',
                PostId: 1,
                UserId: 1,
            },
            {
                id: 2,
                answerContent: 'Smallville \n Prison Break \n One Tree Hill \n Stargate SG-1 \n Stargate Atlantis \n Lost \n Supernatural \n Battlestar Galactica \n The O.C.',
                createdAt: '2018-03-18 08:19:42',
                updatedAt: '2018-03-18 08:20:50',
                PostId: 2,
                UserId: 2,
            },
            {
                id: 3,
                answerContent: 'С електронен подпис имаш пълната идентификация. Tъй като от нар.събрание едва ли ще поискат въвеждане на електронни обсъждания, то може да изпращате вашите становища(с подписан e - mail)с копие до публичен сървър, където да публикувате и получените отговори',
                createdAt: '2018-03-18 08:19:42',
                updatedAt: '2018-03-18 08:20:50',
                PostId: 3,
                UserId: 3,
            },
            {
                id: 4,
                answerContent: 'ако забележиш някакви бъгове по сайта казвай - може да е имало временен проблем със техниката но сайта си е он-лаин и се тества със всякакви браузери така че проблема не е бил в браузера 100% ',
                createdAt: '2018-03-18 08:19:42',
                updatedAt: '2018-03-18 08:20:50',
                PostId: 4,
                UserId: 3,
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Answers', null, {});
    }
};