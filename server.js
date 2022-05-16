const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const JSONData = require("./data.json");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
dotenv.config({ path: "./config.env" });

mongoose.connect(process.env.DATABASE_LOCAL, () =>
  console.log("DB connection succesfully"),
);

app.get("/ok", (req, res) => {
  res.send(JSONData);
});

app.post("/hi", (req, res) => {
  console.log(req.body);
  const { password, login } = req.body;
  if (req.body && login === "shahzod" && password === "123") {
    res.status(200).json({
      succes: true,
      data: {
        id: 123456789,
        name: "Shahzod",
      },
    });
  } else {
    res.status(404).json({
      succes: false,
    });
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on ${port} port...`);
});
