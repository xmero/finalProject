const mongoose = require('mongoose')
var Schema = mongoose.Schema
const collection = 'products'
var User = mongoose.model('User');

const ProductSchema = new Schema({
  name: { type: String },
  location: { type: String },
  username: { type: String },
  description: { type: String },
  free: { type: Boolean, default: true },
  createdAt: { type: Number, default: Date.now },
  owner: {type: Schema.ObjectId, ref: "User"}
}, { collection })

module.exports = mongoose.model('Product', ProductSchema);