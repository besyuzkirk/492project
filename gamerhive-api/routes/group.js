const express = require("express");
const router = express.Router();

const { addGroup, addUserToGroup } = require("../controllers/group");

const { auth } = require("../middlewares/auth");

router.post("/", auth, addGroup);
router.post("/addUserToGroup", auth , addUserToGroup);
module.exports = router;
