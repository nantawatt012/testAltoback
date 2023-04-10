const express = require("express");
const cors = require("cors");
const userRoute = require("./routers/user-route");

const app = express();

app.use(cors());
app.get("api/test");
app.post("user", userRoute);

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
