const mongoose = require("mongoose");
const config = require("config");

module.exports = function(){
    const db = config.get("db");

    mongoose.connect(db)
    .then(()=> {
        console.log("connected to mongodb successfully...")
    })
    .catch(err =>{
        console.log(err.message);
    });
}