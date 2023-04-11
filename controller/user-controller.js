// import { createConnection } from "mysql2/promise";
const { User } = require("../models");
exports.getProfile = async (req, res, next) => {
  try {
    // const connect = await createConnection({
    //   host: "localhost",
    //   user: "root",
    //   password: "123456",
    //   database: "testAlto"
    // });
    // const [rows, fields] = await connect.execute("select * from user");
    // res.status(200).json(rows);

    const users = await User.findAll();
    if (!users) {
      let err = new Error("Not found any user");
      err.statusCode = 400;
      throw err;
    }
  } catch (err) {
    next(err);
  }
};

exports.addProfile = async (req, res, next) => {
  try {
    // const connect = await createConnection({
    //   host: "localhost",
    //   user: "root",
    //   password: "123456",
    //   database: "testAlto"
    // });
    // const [result] = await connect.execute(
    //   "INSERT INTO user (name, email) VALUES (?, ?)",
    //   [req.firstName, req.email]
    // );
    // res.status(200).json({ result });

    const user = req.body;
    console.log(user);
  } catch (err) {
    next(err);
  }
};
