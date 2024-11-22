let mongoose = require("mongoose")
let bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
    next();
});
const User = mongoose.model("User", userSchema);
module.exports = User;
