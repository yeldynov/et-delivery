const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
  name: String,
  products: [
    {
      img: String,
      price: Number,
      productName: String,
      _id: mongoose.Types.ObjectId,
    },
  ],
});

const Shop = mongoose.model('Shop', shopSchema);

module.exports = Shop;
