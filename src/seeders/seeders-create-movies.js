const { faker } = require('@faker-js/faker');


// Set locale to use Vietnamese


// Function random data
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const randomMoviesList = (nMovies) => {
      const MoviesList = [{
        id : 1,
        title : "Pengabdi Setan 2 Comunion",
        description : "adalah sebuah film horor Indonesia tahun 2022 yang disutradarai dan ditulis oleh Joko Anwar sebagai sekuel dari film tahun 2017, Pengabdi Setan.",
        rating : 7,
        image : "",
        createdAt: new Date(),
        updatedAt: new Date()
      }]
      return MoviesList
    }
    return await queryInterface.bulkInsert(`movies`, randomMoviesList(1));
  },
};
