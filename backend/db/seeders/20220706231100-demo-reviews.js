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
      {
        userId: 3,
        spotId: 3,
        review: 'This place smelled so bad.',
        stars: 2
      },
      {
        userId: 4,
        spotId: 4,
        review: 'Wish I could stay here longer',
        stars: 5
      },
      {
        userId: 5,
        spotId: 5,
        review: 'Best house ever!',
        stars: 5
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Reviews', {
      userId: { [Op.in]: [1, 2, 3, 4, 5] },
    }, {});
  }
};