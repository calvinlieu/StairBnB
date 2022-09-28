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
      {
        userId: 5,
        spotId: 6,
        review: 'The house was amazing! I will definitely be coming back.',
        stars: 4
      },
      {
        userId: 5,
        spotId: 7,
        review: 'This place was great. Very clean and neat and well stocked. Chris was awesome in communicating when I had questions and concerns. I had a great fun stay!',
        stars: 4
      },
      {
        userId: 5,
        spotId: 8,
        review: 'Great location, great value for money, cute apartment. Thank you for your hospitality.',
        stars: 4
      },
      {
        userId: 5,
        spotId: 9,
        review: 'Fantastic place. Clean, comfortable, and all the comforts of home. Great location and a great host. Looking forward to coming back SOON!',
        stars: 4
      },
      {
        userId: 5,
        spotId: 10,
        review: 'I will definitely be staying here again!!!! What a dream place and location! No complaints other than I didn’t book enough nights the first time!',
        stars: 4
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