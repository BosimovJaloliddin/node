const express = require("express");
const Joi = require("joi");
const router = express.Router();

const cars = [
  { id: 1, name: "cobalt", year: 2024 },
  { id: 2, name: "nexia", year: 2024 },
  { id: 3, name: "bmw", year: 2024 },
  { id: 4, name: "kaptiva", year: 2024 },
];
router.get("/", (req, res) => {
  res.render("index", { title: "my app", welcom: "Hellow" });
});
router.post("/", (req, res) => {
  validetionFun(res, req);

  const car = {
    id: cars.length + 1,
    name: req.body.name,
    year: req.body.year,
  };
  cars.push(car);
  res.status(201).send(car);
});

router.put("/:id", (req, res) => {
  const car = cars.find((v) => v.id === parseInt(req.params.id));
  if (!car) {
    return res.send("Bu id'da ma'lumot mavjud emas");
  }

  validetionFun(res, req);

  car.name = req.body.name;
  car.yera = req.body.yera;

  res.send(car);
});
router.delete("/:id", (req, res) => {
  const car = cars.find((v) => v.id === parseInt(req.params.id));
  if (!car) {
    return res.send("Bu id'da ma'lumot yo'q");
  }

  const indexCar = cars.indexOf(car);
  cars.splice(indexCar, 1);
  res.status(200).send(cars);
});

function validetionFun(res, req) {
  const carSchema = Joi.object({
    name: Joi.string().required().min(1),
    year: Joi.number().required(),
  });

  const result = carSchema.validate(req.body);

  if (result.error) {
    return res.status(404).send(result.error.details);
  }
}

module.exports = router;
