const express = require("express");

const router = express.Router();

router.use(express.json());

router.get("/", sendEmail, (req, res) => {
  res.send("API REQUEST AND RESPONSE");
});

module.exports = router;
