// adding in all the Dependencies
const express = require("express");
const fs = require("fs");
const path = require('path');

// Initializing
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

//adding in the routes file
require('./routes/routes')(app);

//set up an alert
app.listen(PORT, function() {
    console.log("listening: " + PORT);
});  