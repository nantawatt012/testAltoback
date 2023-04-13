// import { createConnection } from "mysql2/promise";
const { User } = require("../models");
exports.getProfile = async (req, res, next) => {
  try {
    const users = await User.findAll();
    if (!users) {
      let err = new Error("Not found any user");
      err.statusCode = 400;
      throw err;
    } else {
      res.status(200).json(users);
    }
  } catch (err) {
    next(err);
  }
};

exports.addProfile = async (req, res, next) => {
  try {
    const user = req.body;
    console.log(user);
    await User.create(user);
    res.status(200).json("register Success");
  } catch (err) {
    next(err);
  }
};
