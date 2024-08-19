const express = require("express");
const router = express.Router();
const { saveDetails } = require("../controllers/user");

router.route("/send-mail").post(saveDetails);

module.exports = router;
