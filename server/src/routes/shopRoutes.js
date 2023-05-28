const express = require('express');
const mongoose = require('mongoose');

const Shop = mongoose.model('Shop');

const router = express.Router();

router.get('/shops', async (req, res) => {
  const shops = await Shop.find();

  res.send(shops);
});

module.exports = router;
