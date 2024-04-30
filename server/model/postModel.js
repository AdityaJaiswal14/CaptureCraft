const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema(
  {
    name: {
      type: String,
      require: [true, 'Username is required']
    },
    caption: {
      type: String,
      require: [true, 'Date Of Birth is required']
    },
    link: {
      type: String,
      require: [true, 'User Role is required']
    },
    email: {
      type: String,
      require: [true, 'Gender is required']
    },
    
  }
);

const postModel = mongoose.model('post', postSchema);
module.exports = postModel;