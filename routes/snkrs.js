const express = require("express");
const router = express.Router();
const Joi = require("joi");
const Snkrs = require("../Models/Snkr");

const snkrs = [
  { id: 1, Name: "Adidas" },
  { id: 2, Name: "Reebok" },
  { id: 3, Name: "Nike" }
];

router.get("/", (req, res) => {
  Snkr.find().then(snkrs => res.json(snkrs));
});

router.get("/:id", (req, res) => {
  Snkr.findById(req.params.id).then(snkrs => res.json(snkrs));
});

router.post("/", (req, res) => {
  const { error } = validateSnkr(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const newSnkr = new Snkr({
    brand: req.body.brand,
    tech: req.body.tech,
    colorway: req.body.colorway,
    release_date: req.body.release_date,
    name: req.body.name
  });
  newSnkr.save().then(snkr => res.json(snkr));
});

// router.delete("/:id", (req, res) => {

//   Snkr.findByIdandRemove()
//   Snkr.findByIdand(req.params.id).then(snkrs => res.json(snkrs));

//   const snkr = snkrs.find(s => c.id === parseInt(req.params.id));
//   if (!snkr)
//     return res.status(404).send("The Snkr with the given id doesnt exist");
//   const index = snkrs.indexOf(snkr);
//   snkrs.splice(index, 1);

//   res.send(snkr);
// });

function validateSnkr(snkr) {
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  };
  return Joi.validate(snkr, schema);
}

module.exports = router;
