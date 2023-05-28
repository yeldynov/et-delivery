const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userInfo: {
    name: String,
    email: String,
    phone: String,
    address: String,
  },
  cartTotal: {
    type: Number,
    required: true,
  },
  cartItems: [
    {
      img: String,
      price: Number,
      productName: String,
      quantity: Number,
    },
  ],
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
