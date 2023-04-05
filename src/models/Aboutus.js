const mongoose=require("mongoose")
const Aboutus=mongoose.Schema({
    title3:String,
    description3:String,
    linktext3:String,
    link3:String,
   
});
module.exports=mongoose.model("abouts",Aboutus)