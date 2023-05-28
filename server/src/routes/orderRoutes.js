const express = require('express');
const mongoose = require('mongoose');

const Order = mongoose.model('Order');

const router = express.Router();

router.post('/orders', async (req, res) => {
  const { cartItems, cartTotal, userInfo } = req.body;

  try {
    const order = new Order({
      cartItems,
      cartTotal,
      userInfo,
    });
    await order.save();
    res.send(order);
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

module.exports = router;
