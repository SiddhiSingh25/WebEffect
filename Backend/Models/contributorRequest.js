let mongoose = require("mongoose");

let mongooseSchema = new mongoose.Schema({
    portfolio : {type : String}
})

module.exports = {mongooseSchema}