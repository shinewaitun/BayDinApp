const express = require("express");
const app = express();
const cors = require("cors");

app.set("view engine", "ejs");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require("./routes/index"));
app.use(require("./routes/number_chart"));
app.use(require("./routes/answers"));

app.listen(3000, () => {
  console.log("Server started listening in port 3000");
});
