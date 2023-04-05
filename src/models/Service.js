const mongoose=require("mongoose")

const Service=mongoose.Schema({
    icon:String,
    title:String,
    description:String,
    linkText:String,
    link:String,
    link2Text:String,
    link2:String,

})
module.exports=mongoose.model("services",Service)