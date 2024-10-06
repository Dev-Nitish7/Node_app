const mongoose = require('mongoose');

//user Schema
const userSchema = new mongoose.Schema({
  name: { 
    type: String,
     required: true 
    },
  email: { 
    type: String,
     required: true, 
     unique: true
     },
  phone: { 
    type: String,
     required: true 
    },
  city: { 
    type: String, 
    required: true
 }
});

//user models
const User = mongoose.model('User', userSchema);

module.exports = User;
