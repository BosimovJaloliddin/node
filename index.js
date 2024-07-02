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
const logger = require("./middleware/logger");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();
const cars = require("./routes/cars");

app.use("/api/cars", cars);
app.set("view engine", "pug");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(helmet());

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  console.log("Logger ishlayabdi ...");
}
// console.log(config.get("name"));

// console.log(process.env.NODE_ENV);
// console.log(app.get("env"));

app.use(logger);

app.listen(5001, () => {
  console.log("5001 run port");
});
