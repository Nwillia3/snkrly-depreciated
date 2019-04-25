const express = require("express");
const router = express.Router();
const Joi = require("joi");

const nikes = [
  { id: 1, Name: "airmax" },
  { id: 2, Name: "airmax 270" },
  { id: 3, Name: "lebron" },
  { id: 4, Name: "kobe" }
];

router.get("/", (req, res) => {
  res.send(nikes);
});

router.get("/:id", (req, res) => {
  const nike = nikes.find(n => n.id === parseInt(req.params.id));
});

router.post("/", (req, res) => {
  const nike = {
    id: nikes.length + 1,
    name: req.body.name
  };

  nikes.push(nike);
  res.send(nike);
});

router.delete("/:id", (req, res) => {
  const nike = nikes.find(n => n.id === parseInt(req.params.id));
  if (!nike) return res.status(400).send(" The given id for Nike is not valid");

  const index = indexOf(nike);
  nikes.splice(index, 1);

  res.send(nike);
});

function validateNike(nike) {
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  };
  return Joi.validate(nike, schema);
}

module.exports = router;
