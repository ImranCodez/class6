const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
const dbConfig = require("./dbConfig");
dbConfig();
const route = require("./routes/index");
const cookieParser = require("cookie-parser");
app.use(cookieParser()); 
app.use(route);
 const USerSchema=require("./models/AuthSChema")
const ShortnerShecam = require("./models/ShortnerShchema");
const { isvalidUrl } = require("./utils/Validation");




 

app.listen(8000, () => {
  console.log("Server is running ");
});
