let user  = require("../Models/user")
let mongoose = require("mongoose")
const newContributorReqSchema = new mongoose.Schema({
    contributorRequest: [{type : String }],
    contributorRequest: [{type : mongoose.Schema.Types.ObjectId, ref : "user" }]
});

const ContributorRequest = mongoose.model("ContributorReq", newContributorReqSchema);
module.exports = ContributorRequest;
