"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {

    return queryInterface.bulkInsert("Spots", [
      {
        ownerId: 1,
        address: "123 Main Street",
        city: "San Francisco",
        state: "California",
        country: "United States",
        lat: 37.7645358,
        lng: -122.4730327,
        name: "Little Black Cabin By The Lake",
        description: "Welcome to a wonderful beachfront home with breathtaking views and direct access to the shores of Lake Tahoe, located in the private neighborhood of Marla Bay in Zephyr Cove, Nevada. Homes don't get closer than this to the beach!",
        price: 123,
        previewImage: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-39283022/original/8e07d34d-eb2b-45f6-8c75-353ff6a588cb.jpeg?im_w=960",
      },
      {
        ownerId: 2,
        address: "123 Lois Lane",
        city: "San Francisco",
        state: "California",
        country: "United States",
        lat: 38.123654,
        lng: -122.789456,
        name: "Large, Stylish Home w/ Lake Views",
        description: "Built in 1980, this English Tudor house is one of the kind in the Tahoe basin area. Like in the old castle, guests will walk down stairs to reach their space of privacy. The house has 4 stories facing the lake. From the street you will only see 2 stories. 2nd story has a lake facing deck with a BBQ grill and Hottub SPA.",
        price: 456,
        previewImage: "https://a0.muscache.com/im/pictures/miso/Hosting-36771267/original/7067d0e1-8c3b-4588-97de-3e1a4793f86b.jpeg?im_w=960",
      },
      {
        ownerId: 3,
        address: "123 Yummy Lane",
        city: "San Francisco",
        state: "California",
        country: "United States",
        lat: 38.123654,
        lng: -122.789456,
        name: "Zephyr Cabin - Historic Log Cabin",
        description: "Kick back and relax in this peaceful retreat. Two large decks with a great view amongst the trees. Stylish decor with a boho flare. Hear Big Creek feed the lake down below while you relax and dine outside, or surrender in the macrame swings.",
        price: 410,
        previewImage: "https://a0.muscache.com/im/pictures/9238749d-8409-4ec7-9e04-94c9bf888c6d.jpg?im_w=960",
      },
      {
        ownerId: 4,
        address: "487 Gellert Blvd.",
        city: "San Francisco",
        state: "California",
        country: "United States",
        lat: 38.123654,
        lng: -122.889456,
        name: "Private Yosemite Getaway",
        description: "Beautiful light-filled contemporary house with incredible lake views, two large decks, hot tub under the stars, fireplace, gas bbq, chef's kitchen, luxurious bedding / bathrooms, laundry room, *high-speed* internet.",
        price: 789,
        previewImage: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-33766718/original/b39b431b-1168-4e3c-8c16-a1c9f57d3274.jpeg?im_w=960",
      },
      {
        ownerId: 5,
        address: "123 Macdonalds Ave",
        city: "San Francisco",
        state: "California",
        country: "United States",
        lat: 38.123654,
        lng: -122.789156,
        name: "Waterfront Meek Bay Escape",
        description: "Perched on top of a pile of huge boulders, The Rockpile feels a bit like being in an upscale treehouse. Up a series of rock pathways interspersed with 49 stairs, the view of the lake, less than 50 yards away, is phenomenal and the house, built in 1935, exudes the charm, serenity and rustic elegance of Tahoe's bygone days.",
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
