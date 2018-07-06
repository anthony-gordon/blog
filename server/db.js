const db = require("./conn");

function getBackgrounds(testConn) {
  const conn = testConn || db;
  return conn("backgrounds").select();
}

function addBackground(background, testConn) {
  const conn = testConn || db;
  return conn("backgrounds")
    .insert(background)
    .then(getBackgrounds());
}

function getArtworks(testConn) {
  const conn = testConn || db;
  return conn("artworks").select();
}

function addArtwork(artwork, testConn) {
  const conn = testConn || db;
  return conn("artworks")
    .insert(artwork)
    .then(getArtworks());
}

function deleteArtwork(id, testConn) {
  const conn = testConn || db;
  return conn("artworks")
    .where("id", id)
    .del();
}

function deleteBackground(id, testConn) {
  const conn = testConn || db;
  return conn("backgrounds")
    .where("id", id)
    .del();
}

module.exports = {
  getBackgrounds,
  getArtworks,
  addBackground,
  addArtwork,
  deleteArtwork,
  deleteBackground
};
