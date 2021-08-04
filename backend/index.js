const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/users");
const pinRoute = require("./routes/pins");

dotenv.config();

app.use(express.json());

mongoose
  .connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DataBase is Connected"))
  .catch((err) => console.log(err));

app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);

app.listen(process.env.port || 8080, () => {
  console.log("Server is Running");
});
