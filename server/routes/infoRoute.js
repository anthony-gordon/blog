const express = require("express");
const router = express.Router();
var db = require("../db");

router.get("/", function(req, res) {
  db.getInfo().then(info => {
    res.json(info);
  });
});

module.exports = router;
