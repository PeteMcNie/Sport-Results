'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Matches', [
      {
        homeTeam: 'Manchester United',
        awayTeam: 'Burnley FC',
        winner: 'POSTPONED',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        homeTeam: 'Crystal Palace',
        awayTeam: 'Manchester United',
        winner: 'homeTeam',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Matches', null, {})
  }
}
