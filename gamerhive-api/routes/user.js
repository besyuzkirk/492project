const express = require("express");
const { getUser, follow ,changeProfilePicture, getUserName, getUserProfile } = require("../controllers/user");
const { auth } = require("../middlewares/auth");
const {upload } = require("../middlewares/multerMiddleware")
const router = express.Router();

router.get("/", auth,  getUser);
router.post("/follow", auth,  follow);
router.post("/changePp", auth , upload.single('photo'), changeProfilePicture   );
router.get("/getUserName",  getUserName);
router.get("/getUserProfile",   getUserProfile);

module.exports = router;
