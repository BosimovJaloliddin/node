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
