const jwt = require("jsonwebtoken");
const { verify } = require("jsonwebtoken");
// ..............generate token............//

const generateToken = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET);

  return token;
};
// ..........verifytoken part ............//
const verifytoken = (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
};

module.exports = { generateToken, verifytoken };
