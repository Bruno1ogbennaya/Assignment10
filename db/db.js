require('dotenv').config()
const { Sequelize } = require("sequelize");
const { name } = require("../package.json");

//const db = new Sequelize(`postgres://localhost:5432/${name}`);

//const db = new Sequelize(`postgres://postgres:postgres@localhost:5432/${name}`);

const db = new Sequelize(process.env.DATABASE, process.env.USERNAME, process.env.PASSWORD, {
    host: 'localhost',
    dialect: "postgres"
  });



//const db = new Sequelize, db.authenticate(), 
db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });



module.exports = db;