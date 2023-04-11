// const { sequelize } = require("./models");
// sequelize.sync({ force: true });

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const userRoute = require("./routers/user-route");

const app = express();

app.use(cors());
app.use(express.json());

app.get("api/test");
app.post("user", userRoute);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("Server running on port 8000");
});
