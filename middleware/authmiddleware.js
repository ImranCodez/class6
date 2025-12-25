const { verifytoken } = require("../utils/token");

// ........authemiddleware............//

const authmiddleware = (req, res, next) => {
  const Token = req.cookies.Acc_token;
  const decoded = verifytoken(Token);
  console.log("Token", decoded);
  next();
};

module.exports = { authmiddleware };
