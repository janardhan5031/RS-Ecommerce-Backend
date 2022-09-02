const Sequelize = require('sequelize');

const sequelize = require('../utility/database');

const cartItem = sequelize.define('OrderDetails',{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }
});

module.exports=cartItem;