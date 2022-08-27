const Sequelize= require('sequelize');  // to create database in mysql2 via express js

const sequelize= new Sequelize('rs-ecomerce-schema','root','MySql@1234',{  //creating database with name and with default username, pswd
    dialect: 'mysql',
    host: 'localhost'
});

module.exports=sequelize;   // exporting the database pool connection
