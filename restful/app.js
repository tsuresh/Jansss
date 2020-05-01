const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");

app.use(morgan("dev"));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const mongodb_URI =
  "mongodb+srv://admin:pumd3khVTify6wk8@jansss-ik1ov.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(mongodb_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected");
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE");
    return res.status(200).json({
      message: "it works"
    });
  }
  next();
});

const authRoutes = require("./api/routes/auth");
// const generatorRoutes = require("./api/routes/generator");
const vendorRoutes = require("./api/routes/vendors");
const userRoutes = require("./api/routes/users");
const supportRoutes = require("./api/routes/support");

app.use("/auth", authRoutes);
// app.use('/generator', generatorRoutes);
app.use("/vendors", vendorRoutes);
app.use("/users", userRoutes);
app.use("/support", supportRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
