const mongoose=require("mongoose")
const  Banner1=mongoose.Schema({
    title1:String,
    description1:String,
    linktext1:String,
    link1:String,
    imageUrl1:String
});
module.exports=mongoose.model("bannere",Banner1)