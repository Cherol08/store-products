const Sequelize = require('sequelize');
const db = require('../config/database');

const Product = db.define('product', {
    id:{
        type : Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price:{
        type: Sequelize.DOUBLE,
        allowNull: false
    }
})

module.exports = Product;