const Sequelize= require('sequelize');  // to create database in mysql2 via express js

const sequelize= new Sequelize(process.env.DB_NAME,process.env.DB_USERNAME,process.env.DB_PASSWORD,{  //creating database with name and with default username, pswd
    dialect: 'mysql',
    host: process.env.DB_HOST
});

module.exports=sequelize;   // exporting the database pool connection
