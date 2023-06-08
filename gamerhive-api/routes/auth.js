const express = require("express");
const { signUp, login, me } = require("../controllers/auth");
const { auth } = require("../middlewares/auth");

const router = express.Router();

router.post("/sign-up", signUp);
router.post("/login",login )
router.get("/me", auth, me )

module.exports = router;