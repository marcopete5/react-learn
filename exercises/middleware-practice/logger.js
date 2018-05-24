module.exports = (req, res, next) => {
  console.log("logged at " + new Date().toLocaleTimeString())
  next();
}
