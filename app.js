const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config/database');

mongoose.connect(config.database);

mongoose.connection.on("connected", () => {
    console.log('Connected to database' + config.database)
});

const app = express();

const port = 4000;

const users = require('./routes/users');


// Cors
app.use(cors());

// Client Folder
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser
app.use(bodyParser.json());

app.use("/users", users);

// Route
app.get("/", (req, res) => {
   res.send("Homepage")
});

// Server
app.listen(port, () => {
    console.log("Server Run on port: " + port)
});