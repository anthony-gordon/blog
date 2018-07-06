const path = require("path");
const express = require("express");
const backgroundsRoute = require("./routes/backgroundsRoute");

const artworksRoute = require("./routes/artworksRoute");

const server = express();

// Middleware

server.use(express.json());
server.use(express.static(path.join(__dirname, "../public")));

// Routes

server.use("/api/v1", backgroundsRoute);
server.use("/api/v2", artworksRoute);

module.exports = server;
