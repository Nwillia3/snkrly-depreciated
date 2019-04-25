function logger1(req, res, next) {
  console.log("Logging...");
  next();
}

function logger2(req, res, next) {
  console.log("Authenticating...");
  next();
}

module.exports = logger1;
module.exports = logger2;
