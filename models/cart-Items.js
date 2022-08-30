const Sequelize = require('sequelize');

const sequelize = require('../utility/database');

const cartItem = sequelize.define('cartItem',{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    quantity: Sequelize.INTEGER

});

module.exports=cartItem;