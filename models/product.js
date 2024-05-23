const mongoose = require("mongoose");

// Define Product Schema in Cluster 2
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

// Define and export the Product model within Cluster 2
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
