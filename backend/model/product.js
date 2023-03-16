const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name_product: {
    type: String,
    required: [true, "Please fill product name"],
  },
  price_product: {
    type: Number,
    required: [true, "Please fill price product"],
  },
  image_product: {
    url: {
      type: String,
      default: "",
    },
  },
  createdBy: {
    type: String,
    required: [true, "Please provide"],
  },
});

module.exports = mongoose.model("ProductModel", productSchema);
