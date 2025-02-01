const express = require("express");
const { saveContactDetails } = require("../controllers/public");

const router = express.Router();

router.route("/send-mail").post(saveContactDetails);

module.exports = router;
