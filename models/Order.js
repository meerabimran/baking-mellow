const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [{
    name: String,
    option: String,
    price: Number,
    qty: Number
  }],
  total: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'processing', 'shipped', 'delivered'],
    default: 'processing'
  },
  orderDate: {
    type: Date,
    default: Date.now
  },
  deliveryAddress: {
    street: String,
    city: String,
    phone: String
  }
});

module.exports = mongoose.model('Order', OrderSchema);