let mongoose = require("mongoose")
let bcrypt = require("bcrypt");
let contributorRequest = require("./contributorRequest");
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role : {type : String , enum : ["user",  "contributor", "admin"], default : "user"},
    request : {type : Boolean , default : false}
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
    next();
});
const User = mongoose.model("User", userSchema);
module.exports = User;
