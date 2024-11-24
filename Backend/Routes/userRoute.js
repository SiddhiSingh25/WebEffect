let express = require("express");
let userRoute = express.Router();
let User = require("../Models/user");
let contributorRequest = require("../Models/contributorRequest");

//login route
userRoute.post("/user/login", async (req, res) => {
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

//signup route
userRoute.post("/user/signUp", async(req,res)=>{
    let {email, password} = req.body;
    let signUp = await User.findOne({email, password})
    console.log(req.body)
    console.log(signUp)
    res.send("Done")
})

// new contributor 
userRoute.post("/user/requestContributor", async(req,res)=>{
    let {name, email, portfolio} = req.body;
    console.log(name, email, portfolio);
    let newRequest = new contributorRequest({portfolio});
    await newRequest.save()
    res.send("done")
})


module.exports = {userRoute};