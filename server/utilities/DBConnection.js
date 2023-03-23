const CONFIG = require("../utilities/config")
const mongoose = require("mongoose");
const connectToDataBase = function (){
    mongoose.connect(CONFIG.mongoDB, {
      useNewUrlParser: true,
    });
}

module.exports = {connectToDataBase}