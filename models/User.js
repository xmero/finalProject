const mongoose = require('mongoose');
const collection = 'users'
const passportLocalMongoose = require('passport-local-mongoose')


const UserSchema = new mongoose.Schema({
  username: { type: String },
  location: { type: String },
  description: { type: String },
  email: { type: String },
  rating: { type: String },
  createdAt: { type: Number, default: Date.now },
  itemsgiven:  [ { type: String } ],
  itemsrecieved: [ { type: String } ],
  reviews: [ ],
}, { collection })

// {
//     reviewer: { type: String },
//     reviewed: { type: String },
//     rating: { type: Number },
//     message: { type: String },
//   }

UserSchema.plugin( passportLocalMongoose );

module.exports = mongoose.model('User', UserSchema);
