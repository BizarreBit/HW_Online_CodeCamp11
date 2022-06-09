"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "users",
      [
        {
          username: "john",
          email: "john@email.com",
          password: bcrypt.hashSync("123456", 12),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: "jack",
          email: "jack@email.com",
          password: bcrypt.hashSync("654321", 12),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: "mike",
          email: "mike@email.com",
          password: bcrypt.hashSync("432165", 12),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
