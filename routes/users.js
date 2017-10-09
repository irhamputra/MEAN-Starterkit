const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/users');

// Routes Users
router.post("/register", (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if (err){
            res.json({
                success: false,
                msg: 'Failed to register'
            })
        } else {
            res.json({
                success: true,
                msg: 'User registered'
            })
        }
    })
});

router.get("/authenticate", (req, res, next) => {
    res.send("Authenticate")
});

router.get("/profile", (req, res, next) => {
    res.send("Profile")
});

module.exports = router;