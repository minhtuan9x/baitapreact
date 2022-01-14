const mongoose = require("mongoose");
var studentSchema = mongoose.Schema({
    mssv:String,
    name:String,
    email:String,
    birthday:String,
    sex:String
})
var student = mongoose.model("student",studentSchema)

module.exports = student;