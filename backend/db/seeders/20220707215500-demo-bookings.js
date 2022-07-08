'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Bookings', [
      {
        id : 1,
        spotId: 1,
        userId: 1,
        startDate: new Date("2021-12-15"),
        endDate: new Date("2021-12-20")
      },
      {
        id : 2,
        spotId: 2,
        userId: 2,
        startDate: new Date("2021-11-15"),
        endDate: new Date("2021-11-30")
      }
    ]

      )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Reviews')
  }
};
