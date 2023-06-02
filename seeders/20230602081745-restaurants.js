'use strict';

/** @type {import('sequelize-cli').Migration} */
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
    await queryInterface.bulkInsert('Restaurants', [
      {
        id: 1,
        name: "Casa Charly",
        address: "C/ Cirilo Amoros 12",
        capacity: 50,
        kids: false,
        user_id: 2,
        createdAt: "2023-05-02 00:00:00",
        updatedAt: "2023-05-02 00:00:00"
      },
      {
        id: 2,
        name: "El meson de Zaida",
        address: "Avda. Tarongers, 33",
        capacity: 40,
        kids: true,
        user_id: 2,
        createdAt: "2023-05-02 00:00:00",
        updatedAt: "2023-05-02 00:00:00"
      },
      {
        id: 3,
        name: "Norma rural",
        address: "Avda Blasco Ibañez",
        capacity: 33,
        kids: false,
        user_id: 4,
        createdAt: "2023-05-02 00:00:00",
        updatedAt: "2023-05-02 00:00:00"
      },
      {
        id: 4,
        name: "Casa Paco",
        address: "C/ Bailen 7",
        capacity: 10,
        kids: false,
        user_id: 4,
        createdAt: "2023-05-02 00:00:00",
        updatedAt: "2023-05-02 00:00:00"
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
