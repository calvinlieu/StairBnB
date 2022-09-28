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
      {
        ownerId: 3,
        address: "123 Macdonalds Ave",
        city: "Lake Tahoe",
        state: "California",
        country: "United States",
        lat: 38.123654,
        lng: -122.789156,
        name: "SPECTACULAR OCEAN-FRONT HOME IN MONTEREY BAY",
        description: "California is known for some of the most beautiful beaches in the world and Pajaro Dunes is no exception. Positioned on the oceanfront, this 3,000+ sq. ft home has one of the most spectacular views along the coastline and is situated on one of the most private stretches of beach in Monterey Bay.",
        price: 940,
        previewImage: "https://a0.muscache.com/im/pictures/8f4290bc-2128-44e1-b4f3-9c470c69dd95.jpg?im_w=1200",
      },
      {
        ownerId: 1,
        address: "123 Macdonalds Ave",
        city: "Half Moon Bay",
        state: "California",
        country: "United States",
        lat: 38.123654,
        lng: -122.789156,
        name: "A little piece of heaven...",
        description: "Water front house in Half Moon Bay. The house was completely rebuild and decorated by a famous San Francisco architect. A few walking blocks to great restaurants, winery and distillery. World famous hikes are steps away. This is the closest house to Mavericks world famous surf beach. 6 people maximum.",
        price: 1100,
        previewImage: "https://a0.muscache.com/im/pictures/miso/Hosting-38819319/original/77d69cba-bec4-4490-b44e-1f88346693cd.jpeg?im_w=1200",
      },
      {
        ownerId: 2,
        address: "123 Macdonalds Ave",
        city: "Half Moon Bay",
        state: "California",
        country: "United States",
        lat: 38.123654,
        lng: -122.789156,
        name: "Luxury Beachfront Penthouse Walk to the Beach",
        description: "Beachfront luxury Penthouse with unbelievable ocean, beach and sunset views from nearly every room with your own private beachfront rooftop patio",
        price: 1100,
        previewImage: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-49618152/original/fb82edb6-0516-4bce-a3b3-0801fa707e4b.jpeg?im_w=1200",
      },
      {
        ownerId: 3,
        address: "123 Macdonalds Ave",
        city: "Santa Cruz",
        state: "California",
        country: "United States",
        lat: 38.123654,
        lng: -122.789156,
        name: "Heron House- Fantastic, Private Beach House!",
        description: "This is a sunny, spacious beach house with gorgeous decks that open on to the best family and surfing beach in Santa Cruz. Step out of the surf and into the hot tub to enjoy your private view of the park, lagoon, beach and ocean.",
        price: 800,
        previewImage: "https://a0.muscache.com/im/pictures/bdd1dd7f-f316-4aa7-b0a6-456a416d073d.jpg?im_w=1200",
      },
      {
        ownerId: 4,
        address: "123 Macdonalds Ave",
        city: "Aptos",
        state: "California",
        country: "United States",
        lat: 38.123654,
        lng: -122.789156,
        name: "The Waves *Beach Front Home*",
        description: "This is a sunny, spacious beach house with gorgeous decks that open on to the best family and surfing beach in Santa Cruz. Step out of the surf and into the hot tub to enjoy your private view of the park, lagoon, beach and ocean.",
        price: 731,
        previewImage: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-12156428/original/245e7a42-df74-4ed9-9221-235ae60d9162.jpeg?im_w=1200",
      },
      {
        ownerId: 5,
        address: "123 Macdonalds Ave",
        city: "Daly City",
        state: "California",
        country: "United States",
        lat: 38.123654,
        lng: -122.789156,
        name: "Watch the Sunset at a Boho-Chic Studio with Private Terrace",
        description: "Open French doors to a wooden dining patio overlooking the Olympic Club’s golf course and Pacific skyline. Inside, cheerfully eclectic textiles, prints, and wicker accents create an artsy, relaxed vibe. Plants and floral accents bring the outside in.",
        price: 149,
        previewImage: "https://a0.muscache.com/im/pictures/370442db-12a3-4762-973a-07a697eb6a4e.jpg?im_w=1200",
      },
      {
        ownerId: 2,
        address: "123 Macdonalds Ave",
        city: "Capitola",
        state: "California",
        country: "United States",
        lat: 38.123654,
        lng: -122.789156,
        name: "180°OceanviewCondo-Surfboards-Bikes",
        description: "Lounge on the beach, explore colorful Capitola Village, take the cruiser bikes on an adventure, and use the included surfboards at the fantastic surf break in sight of your apartment!",
        price: 320,
        previewImage: "https://a0.muscache.com/im/pictures/b84a7ada-0651-47a5-9d83-9e0242858b81.jpg?im_w=1200",
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
