// const { sequelize } = require("./models");
// sequelize.sync({ force: true });

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const userRoute = require("./routers/user-route");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json("test");
});
// app.get('/', (req, res) => {
//   const data = { message: 'Hello, world!' };
//   res.setHeader('Content-Type', 'application/json');
//   res.status(200).send(JSON.stringify(data));
// });
app.use("/api", userRoute);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
