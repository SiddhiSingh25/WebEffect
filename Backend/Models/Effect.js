let user = require("./user");
let mongoose = require("mongoose")
const effectSchema = new mongoose.Schema({
    title: { type: String, enum : ["buttton", "navbar", "animation", "cards"], default : "animation" },
    contributor: {type : mongoose.Schema.Types.ObjectId, ref : 'User' },//add link and pic of web effect
    createdAt : {type :Date , default : Date.now()}
});

const Effect = mongoose.model("Effect", effectSchema);
module.exports = Effect;
