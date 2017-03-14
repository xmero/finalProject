const mongoose = require('mongoose');
const collection = 'users'

const UserSchema = new mongoose.Schema({
  name: { type: String },
  location: { type: String },
  description: { type: String },
  email: { type: String },
  rating: { type: String },
  createdAt: { type: Number, default: Date.now },
  itemsgiven:  [mongoose.Types.ObjectId],
  itemsrecieved:  [mongoose.Types.ObjectId],
  reviews: [{}],
}, { collection })

module.exports = mongoose.model('User', UserSchema);