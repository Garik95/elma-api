const mongoose = require("mongoose");
const dbconf = require('../dbconfig');

const db = mongoose
    .connect(dbconf.url)
    .then(() => {
        console.log("Successfully connected to database");
    })
    .catch((error) => {
        console.log("database connection failed. exiting now...");
        console.error(error);
        process.exit(1);
    });
    
db.Folder = require('./Folder')(mongoose);


module.exports = db;