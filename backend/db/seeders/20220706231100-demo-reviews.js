'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {
        userId: 1,
        spotId: 1,
        review: 'This place is okay',
        stars: 4
      },
      {
        userId: 2,
        spotId: 2,
        review: 'This place sucks but I loved the view.',
        stars: 2
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Reviews', {
      userId: { [Op.in]: [1, 2, 3,] },
      spotId: { [Op.in]: [1, 2, 3,] }
    }, {});
  }
};