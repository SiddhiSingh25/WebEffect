let express = require("express");
let contributorRoute = express.Router();
let ContributorRequest = require("../Models/contributorRequest");
let jwt = require("jsonwebtoken");
let User = require("../Models/user");
const Effect = require("../Models/Effect");


//new contributor request
contributorRoute.post("/contributor/request/:id", async (req, res) => {
    let { message, status } = req.body;
    let {id} = req.params.id;
    try{
        let request = new ContributorRequest({ user: id, message: message, status: status });
        await request.save()
        res.json({
            status: 200,
            data : request,
            message: "Sucessfully request Send!"
        })
    }
    catch(error){
        res.status(500).json({code : 500, message : "Contributor request not send...Having issues...!"})
    }
    
})

//get all data of copntributor using poupulate
contributorRoute.get("/contributor/allRequest", async (req, res) => {
    let data = await ContributorRequest.findOne({ _id: "6745c1b8079fd309be18f5d4" }).populate("user");
    res.send(data)
})

//upload effect by contributor
contributorRoute.post("/contributor/effectPost", async (req, res) => {
    let { title, contributor } = req.body;
    let effect = new Effect({ title, contributor });
    await effect.save()
    res.json({
        status: 200,
        message: "Successfully data send!!"
    })
})

//delete the effect
contributorRoute.delete("/contributor/effectPost/:id", async (req, res) => {
    let _id = req.params.id;
    let data = await Effect.findByIdAndDelete({ _id: _id })
    res.send(data)
})

//update effect
contributorRoute.put("/contributor/effectPost/:id", async (req, res) => {
    let _id = req.params.id;
    let title  = req.body.title;
    let data = await Effect.findByIdAndUpdate({ _id: _id }, {
        title: title
    }, { new: true })
    res.json({
        status : 200,
        message : "Sucessfully Deleted"
    })
})



module.exports = { contributorRoute };