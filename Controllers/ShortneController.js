const { isvalidUrl } = require("../utils/Validation");
const ShortnerShecam = require("../models/ShortnerShchema");
const { param } = require("../routes");
// ............random url create part ......//

const CreateRandomUrl = (length = 5) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let randomstr = "";

  for (let i = 0; i < length; i++) {
    const randomNum = Math.floor(Math.random() * characters.length);
    randomstr += characters[randomNum];
  }

  return randomstr;
};
//   create urk part ......//

const CreateShortURl = async (req, res) => {
  try {
    const { urlLong } = req.body;
  
    if (!urlLong) return res.status(400).send({ Message: " URL is required" });
    if (!isvalidUrl(urlLong))
      return res.status(400).send({ message: " invalid Url" });
    // ......short url generate part ta ....//
    const urlShort = CreateRandomUrl();
    //   ...........db te store er part ta ....//
    const urldata = new ShortnerShecam({
      urlLong,
      urlShort,
    });
    urldata.save();
    res.status(201).send({
      urlLong: urldata.urlLong,
      urlShort: urldata.urlShort,
    });
  } catch (error) {
    res.status(500).send({message:"internal servar error"});
  }
};

// ......Dynamic route part .....//
const Redirectlong = async (req, res) => {
  const params = req.params;
  if (!params) return;
  const Ulrdata = await ShortnerShecam.findOne({ urlShort: params.id });
  if (!Ulrdata) return res.status(404).send(" Not found the pasge");
  res.redirect(Ulrdata.urlLong);
};

module.exports = { CreateShortURl, Redirectlong };
