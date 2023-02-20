var mongoose = require("mongoose");
var confirmSchema = new mongoose.Schema({
    email: String,
    fname: String,
    lname: String,
    mbno: String,
    plk:String,
    Curr:String
})
module.exports= new mongoose.model("confirms",confirmSchema);