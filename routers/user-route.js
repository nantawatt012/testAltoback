const express = require("express");

const userController = require("../controller/user-controller");

const router = express.Router();

router.get("/users", userController.getProfile);
router.post("/users", userController.addProfile);

module.exports = router;
