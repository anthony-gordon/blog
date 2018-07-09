const path = require("path");
const express = require("express");
const postsRoute = require("./routes/postsRoute");

const infoRoute = require("./routes/infoRoute");

const server = express();

// Middleware

server.use(express.json());
server.use(express.static(path.join(__dirname, "../public")));

// Routes

server.use("/api/v1", postsRoute);
server.use("/api/v2", infoRoute);

module.exports = server;
