const Sequelize = require('sequelize');

const sequelize = require('../utility/database');

const cart = sequelize.define('cart',{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

});

module.exports=cart;