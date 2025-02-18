let User  = require("../Models/user")
let mongoose = require("mongoose")
const ContributorReqSchema = new mongoose.Schema({
    user : {type : mongoose.Schema.Types.ObjectId, ref : 'User'},
    message : {type : String, required : true},
    status : {type : String, enum: ["pending", "approved", "rejected"], default: "pending"}
});

const ContributorRequest = mongoose.model("ContributorReq", ContributorReqSchema);
module.exports = ContributorRequest;