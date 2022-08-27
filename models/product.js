const Sequelize= require('sequelize');      //impprting the sequelizer to create tables in database in mysql2 via express js

const sequelize= require('../utility/database')     // importing database to create tables in 

const product = sequelize.define('product',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey: true
    },
    title:{ type:Sequelize.STRING},
    price:{ 
        type:Sequelize.DOUBLE,
        allowNull:false
    },
    imageUrl:{
        type:Sequelize.STRING,
        allowNull:false
    }
});

module.exports=product;
