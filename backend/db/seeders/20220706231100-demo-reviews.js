'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('Reviews', [
    {
      review: "Wow! What a great place!",
      stars: 5
    },
    {
      review: "I wish I could own a place like this one day!",
      stars: 5
    },
    {
      review: "This is the worst place ever! I will never come back.",
      stars: 1
    }
   ]);

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Reviews');
  }
};
