'use strict';
const bcrypt = require("bcryptjs");

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        firstName: 'Henry',
        lastName: 'Lieu',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user1@user.io',
        username: 'FakeUser1',
        firstName: 'Eric',
        lastName: 'Lieu',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'user2@user.io',
        username: 'FakeUser2',
        firstName: 'Calvin',
        lastName: 'Lieu',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'calvin@gmail.com',
        username: 'Karuban',
        firstName: 'Elson',
        lastName: 'Lieu',
        hashedPassword: bcrypt.hashSync('password4')
      },
      {
        email: 'lieu@gmail.com',
        username: 'Karuuban',
        firstName: 'Raymond',
        lastName: 'Lieu',
        hashedPassword: bcrypt.hashSync('password5')
      },
     ], {});
  },

  async down (queryInterface, Sequelize) {
  
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
