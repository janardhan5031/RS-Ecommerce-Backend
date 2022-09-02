
const express = require('express');

const router = express.Router();

const ordersController = require('../contorllers/ordersController');


router.post('/order-now',ordersController.orderNow);

router.get('/order-now-get', ordersController.orderNowResponse);

module.exports = router;