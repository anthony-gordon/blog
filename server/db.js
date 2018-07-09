const db = require("./conn");

function getPosts(testConn) {
  const conn = testConn || db;
  return conn("posts").select();
}

function getInfo(testConn) {
  const conn = testConn || db;
  return conn("info").select();
}

module.exports = {
  getPosts,
  getInfo
};
