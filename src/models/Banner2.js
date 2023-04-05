const mongoose=require("mongoose")
const  Banner2=mongoose.Schema({
    title2:String,
    description2:String,
    linktext2:String,
    link2:String,
    imageUrl2:String
});
module.exports=mongoose.model("bannera",Banner2)