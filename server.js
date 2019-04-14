const express = require("express");
const Joi = require("joi");
const helmet = require("helmet");
const morgan = require("morgan");
const logger1 = require("./logger");
const logger2 = require("./logger");

const app = express();

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("tiny"));

app.use(logger1);

app.get("/api/brands", (req, res) => {
  res.send(" Lets get to work");
});

app.get("/api/brands/:id", (req, res) => {
  res.send(" Lets get to work");
});

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`listening on port ${port}`));
