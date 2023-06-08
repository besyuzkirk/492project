const User = require("../models/User");
const bcrypt = require("bcrypt");
const generateToken = require("../utils/generateToken.js");

exports.signUp = async (req, res) => {
  const { username, email } = req.body;
  const user = await User.findOne({
    $or: [{ email: email }, { username: username }],
  });
  if (user)
    return res
      .status(401)
      .json({ errors: [{ msg: "This user is already exist" }] });

  let newUser = new User();

  newUser.firstname = req.body.firstname;
  newUser.lastname = req.body.lastname;
  newUser.username = req.body.username;
  newUser.email = req.body.email;

  newUser.setPassword(req.body.password);

  const profile = await User.create(newUser);
  const token = profile && generateToken(profile._id);
 
  return res
    .status(200)
    .json({ success: true, token });
};

exports.login = async (req, res) => {
  const { username , password } = req.body;

  const user = await User.findOne({
    $or: [{ username: username }, { email: username }],
  });

  if (user) {
    if (user.validPassword(req.body.password)) {
        const token = generateToken(user._id);
        return res
        .status(200)
        .json({ success: true, token, user: user })
        
    } else {
      return res.status(200).json({ success: false })
    }
  } else {
    return res.status(200)
    .json({ success: false })
  }
};

exports.me = async (req, res) => {
  
  const { username, lastname, email, _id } = req.user;

  res
    .status(200)
    .json({
      success: true,
      data: { username, lastname ,username, email , _id },
    });
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}