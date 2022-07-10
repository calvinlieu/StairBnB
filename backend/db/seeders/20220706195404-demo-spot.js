"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {

    return queryInterface.bulkInsert("Spots", [
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
        previewImage: "https://s3.amazonaws.com/rcp-prod-uploads/property_images/webp/2021-06/da3ae62144e59058a1d27b1b958af4b96a6135e5LE.jpg",
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
        description: "The house to be at",
        price: 456,
        previewImage: "https://hips.hearstapps.com/hmg-prod/images/classic-turn-of-the-century-american-house-royalty-free-image-1655496994.jpg",
      },
      {
        ownerId: 3,
        address: "123 Yummy Lane",
        city: "San Francisco",
        state: "California",
        country: "United States of America",
        lat: 38.123654,
        lng: -122.789456,
        name: "Vanessa Luong",
        description: "The house to be at during the winter",
        price: 410,
        previewImage: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/08/download-23.jpg",
      },
      {
        ownerId: 4,
        address: "123 Demarcus Lane",
        city: "San Francisco",
        state: "California",
        country: "United States of America",
        lat: 38.123654,
        lng: -122.889456,
        name: "Demarcus Lieu",
        description: "The house to be at during a party",
        price: 789,
        previewImage: "https://media.istockphoto.com/vectors/vector-illustration-of-red-house-icon-vector-id155666671?k=20&m=155666671&s=612x612&w=0&h=sL5gRpVmrGcZBVu5jEjF5Ne7A4ZrBCuh5d6DpRv3mps=",
      },
      {
        ownerId: 5,
        address: "123 Macdonalds Ave",
        city: "San Francisco",
        state: "California",
        country: "United States of America",
        lat: 38.123654,
        lng: -122.789156,
        name: "Macdonalds Lieu",
        description: "The golden arches",
        price: 456,
        previewImage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Spots", {
      ownerId: { [Op.in]: [1, 2, 3, 4, 5] }
    });
  },
};
