const express = require("express");
const router = express.Router();

const {
    registerUser,
    loginUser,
    getUsers
} = require("../controllers/userController");

router.post("/users/register", registerUser);
router.post("/users/login", loginUser);
router.get("/users", getUsers);

module.exports = router;