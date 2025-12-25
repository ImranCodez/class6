const { default: mongoose } = require("mongoose");

const ShortnerShecam = new mongoose.Schema({
  urlLong: {
    type: String,
    required: true,
  },
  urlShort: {
    type: String,
    required: true,
  },
  User: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
  },
  VisitorHistory:[
    {
      Visitime: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
});
  

module.exports = mongoose.model("Shortner",ShortnerShecam)