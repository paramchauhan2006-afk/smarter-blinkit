const User = require("../models/User");

let users = [];


// Register User
const registerUser = (req, res) => {

    const { name, email, password, role } = req.body;

    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
        return res.status(400).json({
            message: "User already exists"
        });
    }

    const newUser = new User(name, email, password, role);

    users.push(newUser);

    res.status(201).json({
        message: "User registered successfully",
        user: newUser
    });

};


// Login User
const loginUser = (req, res) => {

    const { email, password } = req.body;

    const user = users.find(
        u => u.email === email && u.password === password
    );

    if (!user) {
        return res.status(401).json({
            message: "Invalid credentials"
        });
    }

    res.json({
        message: "Login successful",
        user
    });

};


// Get All Users
const getUsers = (req, res) => {

    res.json(users);

};


module.exports = {
    registerUser,
    loginUser,
    getUsers
};