const express = require("express")
const app = express();
const mongoose = require("mongoose");
const port = 8888;
let User = require("./Models/user.js");

const connectDb = async (req, res) => {
    mongoose.connect("mongodb://localhost:27017/WebEffect");
}
connectDb()
    .then(() => {
        console.log("Connected to Database!")
    })
    .catch((err) => {
        console.log("Connection Falied!", err)
    })


app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.post("/", async (req, res) => {
    let {name, email, password} = req.body;
    try {
        let existingUser =await User.findOne({ email });
        if (existingUser) {
            return res.status(500).send("aLREADY REGISTRED")
        }
        let user = new User({
            name,
            email,
            password,
        })
        await user.save()
        res.json({
            code: 200,
            message: "User Sucessfully Registred"
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).send("Internal server error");
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

