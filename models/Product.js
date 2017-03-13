const mongoose = require('mongoose');
const collection = 'products'

const ProductSchema = new mongoose.Schema({
  name: { type: String },
  location: { type: String },
  user: { type: String },
  description: { type: String },
  free: { type: Boolean, default: true },
  createdAt: { type: Number, default: Date.now },
}, { collection })

module.exports = mongoose.model('Product', ProductSchema);