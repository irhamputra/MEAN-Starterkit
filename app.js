const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config/database');

// Connect to MongoDB
mongoose.connect(config.database);

// Listen connection
mongoose.connection.on("connected", () => {
    console.log('Connected to database: ' + config.database)
});

// Listen error
mongoose.connection.on("error", (err) => {
    console.log("Database connection: " + err)
});;;;;;;;;;

const app = express();
const port = 4000;
const users = require('./routes/users');

// Cors
app.use(cors());

// Client Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser
app.use(bodyParser.json());

// Passport
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use("/users", users);

// Router
app.get("/", (req, res) => {
   res.send("Hello world, welcome to backend MEAN-Starterkit")
});

// Server
app.listen(port, () => {
    console.log("Server Run on port: " + port)
});