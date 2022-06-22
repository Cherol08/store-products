require('dotenv').config();
const Sequelize = require('sequelize');

const user = process.env.USER;
const pwd = process.env.PASSWORD;

const db = new Sequelize('sequelize_db', user, pwd,{
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = db;