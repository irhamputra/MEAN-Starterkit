const express = require('express');
const router = express.Router();

// Routes Users
router.get("/register", (req, res, next) => {
    res.send("Register")
});

router.get("/authenticate", (req, res, next) => {
    res.send("Authenticate")
});

router.get("/validate", (req, res, next) => {
    res.send("Validate")
});

router.get("/profile", (req, res, next) => {
    res.send("Profile")
});

module.exports = router;