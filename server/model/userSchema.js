const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      require: [true, 'Username is required']
    },
    dateofbirth: {
      type: String,
      require: [true, 'Date Of Birth is required']
    },
    role: {
      type: String,
      require: [true, 'User Role is required']
    },
    gender: {
      type: String,
      require: [true, 'Gender is required']
    },
    email: {
      type: String,
      require: [true, 'Email is required']
    },
    password: {
      type: String,
      require: [true, 'Password is required'] 
    }

  }
);

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;