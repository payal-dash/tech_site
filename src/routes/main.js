const express=require('express')
const{ route } = require('express/lib/application')
const async=require("hbs/lib/async");
const Contact=require("../models/Contact");
const detail = require("../models/detail");
const Service = require('../models/Service');
const Slider = require('../models/Slider');
const Banner= require('../models/Banner');
const Banner1= require('../models/Banner1');
const Banner2= require('../models/Banner2');
const Aboutus = require('../models/Aboutus');
const Footer = require('../models/Footer');
const routes=express.Router()



routes.get("/",async (req,res) => {
    
   const details= await detail.findOne({"_id":"63dfb7d6181475c8808d1312"})
   
   const slides= await Slider.find()
  
   const services= await Service.find()
   const banners= await Banner.find()
   const bannere=await Banner1.find()
   const bannera=await Banner2.find()
   const abouts=await Aboutus.find()
   const foot=await Footer.find()
   res.render("index",{
        details:details,
        slides:slides,
        services:services,
        banners:banners,
        bannere:bannere,
        bannera:bannera,
        abouts:abouts,
        foot:foot
    }) ; 
});
 
routes.get('/gallery',async(req,res) => {
    const details= await detail.findOne({"_id":"63dfb7d6181475c8808d1312"})
    res.render("gallery",{
        details:details,
   });
});
routes.get('/about',async(req,res) => {
    const details= await detail.findOne({"_id":"63dfb7d6181475c8808d1312"})
    res.render("about",{
        details:details,
});
});

routes.post("/process-contact-form",async (request,response)=>{
    console.log("form is submitted")
    console.log(request.body)


    try{
    
        const data=await Contact.create(request.body)
         console.log(data)
         response.redirect("/")
      
   }catch(e)
   {
    console.log(e)
    response.redirect("/")
   } 
})
module.exports=routes ;