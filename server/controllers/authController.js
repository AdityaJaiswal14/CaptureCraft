const userModel = require('../model/userSchema');
const User = require('../model/userSchema');
const postSchema = require('../model/postModel');
//const post = require('../model/postModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (user) => {
  console.log(user.username)
  const token = jwt.sign({ "name": user.username, "id": user._id , email:user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return token;
};
const register = async (req, res) => {
  try {
    let user = new User({
      username: req.body.username,
      dateofbirth: req.body.dateofbirth,
      gender: req.body.gender,
      role: req.body.role,
      password: req.body.password,
      email: req.body.email,
    });

    const doc = await user.save();
    console.log(doc)
    res.json({doc});
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
}

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email: email });
    if (user) {
      if (user.password === password) {
        const token = generateToken(user)
        const cookieOption = {
          maxAge: 24 * 60 * 60 * 1000, //24hr
          httpOnly: true ,
          sameSite : "none",
          secure: true
        };

    res.cookie("token",token,cookieOption)
        console.log(token);
        res.json("Success");
      } else {
        res.status(401).json({ error: 'Password Incorrect' });
      }
    } else {
      res.status(404).json({ error: 'No email found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
}

const post = async (req, res) => {
  const { caption, link } = req.body;
  try {
    const {email , name} = req.user;
    const post = new postSchema({
      name,
      link,
      caption,
      email
    });
    await post.save()
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false , error: 'Post failed' });
  }
}
const postRetrieveAll = async (req, res) => {
  try {
    const post = await postSchema.find().exec();
    res.status(200).json({post}); 
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
}
const mypost = async (req, res) => {
  try {
    const {email} = req.user;
    //let email="aditya.jaiswal10@gmail.com"
    const check = await postSchema.find({ email: email });
    if(check){
      res.status(200).json({check});  
    }
        
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
}

const logout = async (req, res) => {
  try {
    res.clearCookie("token")
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false , error: 'Logout failed' });
  }
}

module.exports = {register , login ,post, postRetrieveAll,mypost, logout}  