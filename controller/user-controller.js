const { User } = require("../models");
exports.getProfile = async (req, res, next) => {
  try {
    const users = await User.findAll();
    if (users.length == 0) {
      console.log("dfs");
      res.status(400).json("No one in database");
    } else {
      console.log("users");
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
