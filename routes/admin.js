const express = require('express');   

const router = express.Router();

const adminControllers = require('../contorllers/adminControllers');

router.get('/add-product',adminControllers.getaddProduct);

router.post('/post-add-product',adminControllers.postaddProduct);

router.get('/get-edit-product/:productId',adminControllers.getEditProduct);

router.post('/post-edit-product',adminControllers.postEditProduct);

router.post('/delete-product',adminControllers.deleteProduct);

module.exports= router;
