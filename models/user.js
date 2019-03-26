const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

// Set schema for users
const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  personality: [{
      extraversion: {type: Number, default: 0},
      agreeableness: {type: Number, default: 0},
      conscientiousness: {type: Number, default: 0},
      emotional_stability: {type: Number, default: 0},
      openness: {type: Number, default: 0}
       }]
});

const User = mongoose.model('User', UserSchema, 'user');
module.exports = User;
