module.exports = function (req, res, next) {
  console.log("middleware function one...");
  next();
};
