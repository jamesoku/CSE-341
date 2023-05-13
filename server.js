var express = require("express");
var app = express();
// const swaggerUi = require("swagger-ui-express");

const port = process.env.PORT || 3000;
app.use("/contacts", require("./routes/contacts"));
app.use("/", require("./routes/index"));
// const swaggerdoc = require("./swagger.json");
const connectDB = require("./db/db");
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerdoc));

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
  });
});
