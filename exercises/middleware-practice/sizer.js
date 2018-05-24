module.exports = (database) => {
  return (req, res, next) => {
    res.size = database.length;
    next();
  }
}
