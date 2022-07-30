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
        previewImage: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-39283022/original/8e07d34d-eb2b-45f6-8c75-353ff6a588cb.jpeg?im_w=960",
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
        previewImage: "https://a0.muscache.com/im/pictures/miso/Hosting-36771267/original/7067d0e1-8c3b-4588-97de-3e1a4793f86b.jpeg?im_w=960",
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
        previewImage: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-38408609/original/492df9f2-221b-49f8-95fa-3763cc01a06e.jpeg?im_w=960",
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
        previewImage: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-33766718/original/b39b431b-1168-4e3c-8c16-a1c9f57d3274.jpeg?im_w=960",
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
        previewImage: "https://a0.muscache.com/im/pictures/miso/Hosting-53045905/original/89b5977c-2f30-42d8-83df-ac641bb0ac49.jpeg?im_w=960",
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
