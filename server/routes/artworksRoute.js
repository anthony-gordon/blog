const express = require("express");
const router = express.Router();
var db = require("../db");

router.get("/", function(req, res) {
  db.getArtworks().then(artworks => {
    res.json(artworks);
  });
});

router.post("/", (req, res) => {
  db.addArtwork(req.body)
    .then(artwork => res.json(artwork))
    .catch(err => res.status(500).send(err.message + "SERVER ERROR"));
});

router.delete("/:id", (req, res) => {
  db.deleteArtwork(req.params.id)
    .then(() => res.sendStatus(202))
    .catch(err => res.status(500).send((err.message = "SERVER ERROR")));
});

module.exports = router;
