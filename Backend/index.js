if (process.env.NODE_ENV != "production") {
    require('dotenv').config()
}
const express = require("express")
const app = express();
const mongoose = require("mongoose");
const port = 8888;
let User = require("./Models/user.js");
let {userRoute} = require("./Routes/userRoute.js");

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

app.use("/api", userRoute)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

