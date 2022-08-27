const express=require('express');   // importing the express module to handel all req and res handlers

const router=express.Router();      // create new router obj to handle multiple req to differentiates

const shopController = require('../contorllers/shopControllers');

router.get('/',shopController.getProducts )

router.get('/get-product/:prodId',shopController.getSingleProduct);

router.get('/get-all-products',shopController.getAllProducts);


module.exports=router;              //exporting the router obj to app