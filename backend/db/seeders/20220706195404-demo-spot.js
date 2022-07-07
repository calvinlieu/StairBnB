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
    return queryInterface.bulkInsert('Spots', [
      {
        ownerId: 1,
        address: "123 Main Street",
        city: "San Francisco",
        state: "California",
        country: "United States of America",
        lat: 37.7645358,
        lng: -122.4730327,
        name: "App Academy",
        description: "Place where web developers are created",
        price: 123,
        previewImage: "https://images.skyscrapercenter.com/building/rappleyea1a.jpg",
        numReviews: 5,
        avgStar
      },
      {
        ownerId: 2,
        address: "123 Lois Lane",
        city: "San Francisco",
        state: "California",
        country: "United States of America",
        lat: 38.123654,
        lng: -122.789456,
        name: "Calvin Lieu",
        description: "Place where a web developer is created",
        price: 456,
        previewImage: "https://upload.wikimedia.org/wikipedia/commons/1/1e/San_Francisco_from_the_Marin_Headlands_in_March_2019.jpg"
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Spots')
  }
};
