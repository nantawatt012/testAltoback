const express = require("express");

const userController = require("../controller/user-controller");

const router = express.Router();

router.post("/add", userController.addProfile);
router.get("/get", userController.getProfile);

module.exports = router;
