const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

// Set schema for users
const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  personality: [{
      extraversion: Number,
      agreeableness: Number,
      conscientiousness: Number,
      emotional_stability: Number,
      openness: Number
       }]
});

const User = mongoose.model('User', UserSchema, 'user');
module.exports = User;
