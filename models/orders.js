const Sequelize = require('sequelize');

const sequelize = require('../utility/database');

const order = sequelize.define('order',{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

});

module.exports=order;