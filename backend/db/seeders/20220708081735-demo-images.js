'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Images', [
      {
        url: 'https://picsum.photos/200/300',
        reviewId: 1,
        spotId: 1,
        imageableId: 1,
        imageableType: "Spot"
      },
      {
        url: 'https://picsum.photos/200',
        reviewId: 2,
        spotId: 2,
        imageableId: 1,
        imageableType: "Spot"
      },
      {
        url: 'https://picsum.photos/id/237/200/300',
        reviewId: 2,
        spotId: 2,
        imageableId: 1,
        imageableType: "Review"
      },
      {
        url: 'https://picsum.photos/seed/picsum/200/300',
        reviewId: 3,
        spotId: 3,
        imageableId: 3,
        imageableType: "Spot"
      },
      {
        url: 'https://picsum.photos/200/300?grayscale',
        reviewId: 1,
        spotId: 1,
        imageableId: 2,
        imageableType: "Review"
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Images', {
      reviewId: { [Op.in]: [1, 2, 3, 4, 5] },
      spotId: { [Op.in]: [1, 2, 3, 4, 5] }
    }, {});
  }
};