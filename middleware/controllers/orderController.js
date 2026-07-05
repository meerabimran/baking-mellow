const Order = require('../models/Order');

// Create Order
exports.createOrder = async (req, res) => {
  try {
    const { items, total, deliveryAddress } = req.body;
    const userId = req.user.id;

    const order = await Order.create({
      user: userId,
      items,
      total,
      deliveryAddress,
      status: 'processing'
    });

    res.status(201).json({
      success: true,
      message: 'Order placed successfully',
      order
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get User Orders
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id })
      .sort({ orderDate: -1 });
    
    res.json({ orders });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Single Order
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findOne({
      _id: req.params.id,
      user: req.user.id
    });

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.json({ order });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};