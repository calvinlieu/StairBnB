'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bookings', [
      {
        userId: 1,
        spotId: 1,
        startDate: new Date('2022-07-04'),
        endDate: new Date('2022-07-05')
      },
      {
        userId: 2,
        spotId: 2,
        startDate: new Date('2022-07-06'),
        endDate: new Date('2022-07-07')
      },
      {
        userId: 3,
        spotId: 3,
        startDate: new Date('2022-07-11'),
        endDate: new Date('2022-07-21')
      },
      {
        userId: 4,
        spotId: 4,
        startDate: new Date('2022-07-17'),
        endDate: new Date('2022-07-21')
      },
      {
        userId: 5,
        spotId: 5,
        startDate: new Date('2022-07-25'),
        endDate: new Date('2022-07-29')
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Bookings', {
      startDate: { [Op.in]: [new Date('2022-7-04'), new Date('2022-7-06'), new Date('2022-7-11'),new Date('2022-7-17'),new Date('2022-7-25')] }
    }, {});
  }
};