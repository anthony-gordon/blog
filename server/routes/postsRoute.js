const express = require("express");
const router = express.Router();
var db = require("../db");

router.get("/", function(req, res) {
  db.getPosts().then(posts => {
    res.json(posts);
  });
});

module.exports = router;
