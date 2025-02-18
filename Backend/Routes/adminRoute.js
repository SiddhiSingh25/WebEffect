let express = require("express");
const Effect = require("../Models/Effect");
const ContributorRequest = require("../Models/contributorRequest");
let adminRoute = express.Router();


adminRoute.post("/admin/contributorRequest", async (req, res) => {
    let data = await ContributorRequest.find();
    res.json({
        status: 200,
        data: data
    })
})


// adminRoute.post("/admin/contributorRequest/:id", async (req, res) => {
//     let id = req.params.id;
//     let role = req.body.role;
//     let data = await ContributorRequest.findById({ _id: id, request }).populate("user");
//     if (!data) {
//         return res.status(404).send("The user has not send any request!")
//     }
//     else {

//     }
//     // if(role === "user"){
//     //     // data.user.role = "contributor",
//     //     // data.status = "approved"
//     //     console.log(data.user.role)
//     // }
//     console.log(data)
//     res.json({
//         status: 200,
//         data: data
//     })
// })



//Admin ppperform action
adminRoute.put("/admin/contributorRequest/:id", async (req, res) => {
    let { id } = req.params;
    let { status } = req.body;
    try {
        let request = await ContributorRequest.findByIdAndUpdate(id, { status }, { new: true });
        res.json({
            code: 200,
            data : request,
            message: "Contributor request Action Perform"
        })
    }
    catch (error) {
        res.status(500).json({ code: 404, message: "Having issues unupdate" })
    }
})




module.exports = { adminRoute }