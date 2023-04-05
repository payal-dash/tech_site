const mongoose=require("mongoose")
const Footer=mongoose.Schema({
    title4:String,
    linktext4:String,
    link4:String,
   
});
module.exports=mongoose.model("foot",Footer)