var express = require("express");
var app = express();
const port = process.env.PORT || 3000;
app.use("/contacts", require("./routes/contacts"));
app.use("/", require("./routes/index"));
const connectDB = require("./db/db");

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
  });
});
