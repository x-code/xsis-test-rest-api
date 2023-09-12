const { Sequelize } = require('sequelize');
import 'dotenv/config'

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: "postgres"
});

const checkConnectDatabase = async ()=> {
    try {
        await sequelize.authenticate();
        console.log('Connection database successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

export default checkConnectDatabase;