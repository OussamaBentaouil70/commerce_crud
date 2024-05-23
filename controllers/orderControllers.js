const Order = require("../models/order");

// Controller function to create a new order
const createOrder = async (req, res) => {
  try {
    const orders = Array.isArray(req.body) ? req.body : [req.body]; // Normalize to an array
    const createdOrders = [];

    for (let order of orders) {
      const newOrder = await Order.create({
        product_id: order.product_id,
        quantity: order.quantity,
        customer_name: order.customer_name,
        customer_email: order.customer_email,
        customer_address: order.customer_address,
        status: order.status,
      });
      createdOrders.push(newOrder);
    }

    res.status(201).json(createdOrders);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller function to get all orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error getting orders:", error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving orders" });
  }
};

// Controller function to get orders by product_id
const getOrdersByProductId = async (req, res) => {
  try {
    const { product_id } = req.params;
    const orders = await Order.find({ product_id });
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error getting orders by product_id:", error);
    res.status(500).json({
      error: "An error occurred while retrieving orders by product_id",
    });
  }
};

// Export the controller functions for use in routes
module.exports = {
  createOrder,
  getAllOrders,
  getOrdersByProductId,
};
