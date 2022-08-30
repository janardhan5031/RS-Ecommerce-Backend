
const express=require('express');   // importing the express module to handel all req and res handlers

const router=express.Router();      // create new router obj to handle multiple req to differentiates

const cartController = require('../contorllers/CartControllers');

router.get('/cart',cartController.getCartItems);
router.get('/cart-out',cartController.getCartItemsOut);

router.post('/add-to-cart', cartController.postItemToCart) ;
router.post('/add-to-cart-out/:prodId', cartController.postItemToCartOut) ;

router.post('/delete-cart-product',cartController.deleteItem);

router.post('/order-now',cartController.orderNow);

router.get('/order-now-get', cartController.orderNowResponce);

module.exports = router;
