import { createConnection } from "mysql2/promise";

exports.getProfile = async (req, res, next) => {
  try {
    const connect = await createConnection({
      host: "localhost",
      user: "root",
      password: "123456",
      database: "testAlto"
    });
    const [rows, fields] = await connect.execute("select * from user");
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
};

exports.addProfile = async (req, res, next) => {
  try {
    const connect = await createConnection({
      host: "localhost",
      user: "root",
      password: "123456",
      database: "testAlto"
    });
    const [result] = await connect.execute(
      "INSERT INTO user (name, email) VALUES (?, ?)",
      [req.firstName, req.email]
    );

    res.status(200).json({ result });
  } catch (err) {
    next(err);
  }
};
