const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
var InitiateMongoServer = require("./db");
require("dotenv").config();

const app = express();
app.use(cors());

// Middleware
app.use(bodyParser.json());

// PORT
const PORT = process.env.PORT || 4000;

InitiateMongoServer();

app.get("/check", (req, res) => {
  console.log("req==========", req);
  res.json({ test: "API Working again" });
});

/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
