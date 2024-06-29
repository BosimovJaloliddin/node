// const fs = require("fs");

// fs.readdir("./", function (err, files) {
//   if (err) console.log(err);
//   else console.log(files);
// });

// let rF = fs.readFileSync("./index.js", "utf8");

// console.log(rF);

// fs.readFile("./index.js", "utf8", (err, file) => {
//   if (err) console.log(err);
//   else console.log(file);
// });

// const writeF = fs.writeFileSync("./newJsFile.js", "const name='Ali'");

// console.log(writeF);

// fs.writeFile("./newFile.js", "Hellow", "utf8", function (err, data) {
//   if (err) console.log(err);
//   else console.log(data);
// });

// let renSync = fs.renameSync();

// fs.rename("./newFile.txt", "code.js", (oldPath, newPath) => {
//   if (oldPath) console.log(oldPath);
//   else console.log(newPath);
// });

// const fs = require("fs");

// fs.unlink("./newJsFile.js", (err) => {
//   if (err) throw err;
// });

// emitter.on("messegLogged", (...arg) => {
//   console.log(arg);
// });

// emitter.emit("messegLogged", 1, 2, 3);

// const Logger = require("./logger");

// const logger = new Logger();

// logger.on("hodisa1", (name) => {
//   console.log(`My name is ${name}`);
// });
// logger.on("hodisa2", (name) => {
//   console.log(`My name is ${name}`);
// });
// logger.on("hodisa3", (name) => {
//   console.log(`My name is ${name}`);
// });
// logger.on("hodisa4", (name) => {
//   console.log(`My name is ${name}`);
// });

// logger.goEvent();

// const http = require("node:http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.write("Home Page");
//     res.end();
//   }
//   if (req.url === "/about") {
//     res.write("About page");
//     res.end();
//   }
// });

// server.listen(8000);

// =======================================

// const getData = async () => {
//   let res = await fetch(
//     "https://kun.uz/news/2024/06/25/200-dollar-uchun-200-mln-som-badal-tolayotganlar-banklar-nega-ishsizlarga-kredit-bergan"
//   )
//     .then((res) => res.json())
//     .then((res) => console.log(res));
// };
// getData();

// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.send("Go...");
// });

// const port = process.env.PORT || 5000;

// app.listen(port, () => {
//   console.log(port);
// });

// const books = [
//   { id: 1, name: "halqa" },
//   { id: 2, name: "halqa" },
//   { id: 3, name: "halqa" },
//   { id: 4, name: "halqa" },
// ];

// const express = require("express");
// const Joi = require("joi");
// const app = express();
// app.use(express.json());

// app.post("/api/books", (req, res) => {
//   validCode(req, res);

//   const book = {
//     id: books.length + 1,
//     name: req.body.name,
//   };
//   books.push(book);
//   res.status(201).send(book);
// });

// app.put("/api/books/:id", (req, res) => {
//   //Kitobni topib olamiz
//   //Kitob bo'lmasa 404 qaytaramiz
//   const book = books.find((val) => val.id === parseInt(req.params.id));
//   if (!book) {
//     return res.status(404).send("Kitob mavjud emas");
//   }
//   //kitob topilsa uni validatsiya qilamiz
//   //agar kitob validatsiyadan o'tmasa 400 qayataramiz
//   validCode(req, res);

//   // kitobni yangilaymiz
//   book.name = req.body.name;
//   //yangilangan kitobni qaytaramiz
//   res.send(book);
// });

// app.get("/api/books/:id", (req, res) => {
//   const oneBook = books.find((val) => val.id === parseInt(req.params.id));
//   if (!oneBook) {
//     res.status(404).send("Kitob mavjud emas");
//   }
//   res.send(oneBook);
// });
// app.delete("/api/books/:id", (req, res) => {
//   const book = books.find((val) => val.id === parseInt(req.params.id));
//   if (!book) {
//     return res.status(404).send("Kitob topilmadi");
//   }
//   const indexBook = books.indexOf(book);

//   books.splice(indexBook, 1);

//   res.send(book);
// });

// app.get("/books", (req, res) => {
//   res.send(books);
// });

// function validCode(req, res) {
//   const bookSchema = Joi.object({
//     name: Joi.string().required().min(3),
//   });

//   const result = bookSchema.validate(req.body);

//   if (result.error) {
//     return res.status(400).send(result.error.details[0].message);
//   }
// }

// app.listen(5000, () => {
//   console.log(`5000 run port`);
// });

const express = require("express");
const Joi = require("joi");
const app = express();
app.use(express.json());

const cars = [
  { id: 1, name: "cobalt", year: 2024 },
  { id: 2, name: "nexia", year: 2024 },
  { id: 3, name: "bmw", year: 2024 },
  { id: 4, name: "kaptiva", year: 2024 },
];

app.get("/api/cars", (req, res) => {
  res.send(cars);
});
app.post("/api/cars", (req, res) => {
  validetionFun(res, req);

  const car = {
    id: cars.length + 1,
    name: req.body.name,
    year: req.body.year,
  };
  cars.push(car);
  res.status(201).send(car);
});

app.put("/api/cars/:id", (req, res) => {
  const car = cars.find((v) => v.id === parseInt(req.params.id));
  if (!car) {
    return res.send("Bu id'da ma'lumot mavjud emas");
  }

  validetionFun(res, req);

  car.name = req.body.name;
  car.yera = req.body.yera;

  res.send(car);
});
app.delete("/api/cars/:id", (req, res) => {
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

app.listen(5001, () => {
  console.log("5001 run port");
});
