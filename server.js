const express = require("express");
const snkrs = require("./routes/snkrs");
const nikes = require("./routes/nike");

const config = require("config");
const Joi = require("joi");
const helmet = require("helmet");
const morgan = require("morgan");
const logger1 = require("./middleware/logger");
const logger2 = require("./middleware/logger");
const startupDebugger = require("debug")("app:startup");

const mongoose = require("mongoose");

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use("/api/brands", snkrs);
app.use("/nike", nikes);

app.use(logger1);
app.use(logger2);

//DB config
const db = require("./Config/keys").mongoURI;

//connect to mongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Db connected"))
  .catch(err => console.log(err));

//Configuration
console.log(`Application name: ${config}.get('name')`);
console.log(`Mail Server: ${config}.get('mail.host)`);

// detecting environment
if (app.get("env") === "development") {
  app.use(morgan("tiny"));

  startupDebugger("morgan enabled");
  // console.log("morgan enabled");
}

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`listening on port ${port}`));
