const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    handle: {
      type: String,
      required: true,
      index: true
    },
    email: {
      type: String,
      required: true,
      index: true
    },
    password: {
      type: String,
      required: true
    },
    date: {
      type: Number,
      default: Date.now
    },
  })

module.exports = User = mongoose.model('users', UserSchema);
