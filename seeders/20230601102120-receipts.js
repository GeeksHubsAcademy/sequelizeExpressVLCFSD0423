'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Recipes', [
      {
        id: 1,
        name: "Carbonara",
        vegan: false,
        time: 30,
        createdAt: "2023-05-02 00:00:00",
        updatedAt: "2023-05-02 00:00:00"
      },
      {
        id: 2,
        name: "Paella",
        vegan: false,
        time: 100,
        createdAt: "2023-05-02 00:00:00",
        updatedAt: "2023-05-02 00:00:00"
      },
      {
        id: 3,
        name: "Borsch",
        vegan: true,
        time: 150,
        createdAt: "2023-05-02 00:00:00",
        updatedAt: "2023-05-02 00:00:00"
      },
      {
        id: 4,
        name: "Fajitas",
        vegan: false,
        time: 20,
        createdAt: "2023-05-02 00:00:00",
        updatedAt: "2023-05-02 00:00:00"
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Recipes', null, {});

  }
};