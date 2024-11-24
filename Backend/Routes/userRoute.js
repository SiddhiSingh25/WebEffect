let express = require("express");
let userRoute = express.Router();
let User = require("../Models/user");
let contributorRequest = require("../Models/contributorRequest");
let bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken")


//login route
userRoute.post("/user/login", async (req, res) => {
    let { name, email, password } = req.body;
    try {
        let existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(500).send("ALREADY REGISTRED")
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

//signup route
userRoute.post("/user/signUp", async (req, res) => {
    let { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
        return res.status(404).json({ message: "User not Found!" })
    }
    const isPass = await bcrypt.compare(password, user.password);
    if (!isPass) {
        return res.status(404).message("Password is incorrect")
    }

    const token = jwt.sign({ id: user._id, email: user.email }, process.env.SECRET_KEY , { expiresIn: '1h' });

    res.status(200).json({
        status: "200",
        message: "User SignUp Sucessfully",
        token: token
    })
})

// new contributor 
userRoute.post("/user/requestContributor", async (req, res) => {
    let { name, email, portfolio } = req.body;
    console.log(name, email, portfolio);
    let newRequest = new contributorRequest({ portfolio });
    await newRequest.save()
    res.send("done")
})


module.exports = { userRoute };