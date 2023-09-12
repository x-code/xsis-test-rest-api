"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(`movies`, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uuid: {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal("gen_random_uuid()"),
        unique: true
      },
      title: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      rating: {
        type: Sequelize.FLOAT,
      },
      image : {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      status: {
        allowNull: false,
        type: Sequelize.ENUM("1", "2"),
        defaultValue : "1",
        comment: "1 Active, 2 Deactive"
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(`movies`);
  },
};
