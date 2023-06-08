const jwt = require("jsonwebtoken");
const User = require("../models/User.js");

exports.auth = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    res.status(403).send({ type: "error", msg: "You need to be logged in to visit this route" });
    return
  }

  console.log(token);

  try {
    const decoded = jwt.verify(token, process.env.SECRET);

    const user = await User.findById(decoded.id);

    if (!user) {
      return next({ message: `No user found for ID ${decoded.id}` });
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(403).send({ type: "error", msg: "You need to be logged in to visit this route" });
  }
};
