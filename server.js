const express = require("express");

const app = express();

//middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send(" Lets get to work");
});

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`listening on port ${port}`));
