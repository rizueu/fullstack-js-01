require("dotenv").config({ path: "./.env" });

const Database = require("./app/config/Database");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const path = require("path");

const app = express();
const db = new Database().connect();

// Middleware
app.use(morgan("dev"));
app.use(helmet.noSniff());

// Setup CORS
const whitelist = ["http://localhost:3000"];
app.use(
  cors({
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS!"));
      }
    },
  })
);

// Parse request application/json and urlencoded
app.use(express.urlencoded({ extended: "false" }));
app.use(express.json());

// Setup static directory
app.use(express.static(path.join(__dirname, "./public")));

// Define routes
app.use("/api/v1", require("./app/routes"));

// Listening the server
const PORT = process.env.APP_PORT || 8080;
app.listen(PORT, () => console.log(`Magic happen at http://localhost:${PORT}`));
