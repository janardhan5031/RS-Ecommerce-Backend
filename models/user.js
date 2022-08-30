const Sequelize=require('sequelize'); //importing sequelizer

const sequelize=require('../utility/database'); //importing the database

const User=sequelize.define('user',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    name:Sequelize.STRING,
    email:Sequelize.STRING
})

module.exports=User;