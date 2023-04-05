const mongoose=require("mongoose")
const  Banner=mongoose.Schema({
    title:String,
    description:String,
    linktext:String,
    link:String
});
module.exports=mongoose.model("banner",Banner)