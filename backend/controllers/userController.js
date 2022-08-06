const User = require('../models/userModels')
const jwt = require('jsonwebtoken')
require('dotenv').config();

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.JWT_SECRET, {expiresIn: '3d'})
}

// login a user
const loginUser = async (req, res) => {
    res.json({mssg: 'login user'})
  }
  
  // signup a user
  const signupUser = async (req, res) => {
    const {email, password} = req.body
  
    try {
      const user = await User.signup(email, password)
      
      const token = createToken(user._id)
  
      res.status(200).json({email, token})
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  }
  
  module.exports = { signupUser, loginUser }