
const express = require('express');

const router = express.Router();

const ordersController = require('../contorllers/ordersController');


router.post('/order-now',ordersController.orderNow);

router.get('/get-all-order-items', ordersController.getAllOrders);

module.exports = router;