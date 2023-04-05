const express= require("express");
const hbs= require("hbs")
const app= express();
const mongoose=require("mongoose")
const bodyParser=require('body-parser')
const routes=require('./routes/main')
const detail=require("./models/detail")
const Slider=require("./models/Slider")
const Service =require("./models/Service")
const Banner=require("./models/Banner")
const Banner1=require("./models/Banner1")
const Banner2=require("./models/Banner2")
const Aboutus=require("./models/Aboutus")
const Footer=require("./models/Footer")
app.use(bodyParser.urlencoded({
  extended:true
}))

app.use('/static',express.static("public"))
app.use('',routes)



app.set('view engine', 'hbs')
app.set("views","views")
hbs.registerPartials("views/partials")

 mongoose.connect("mongodb://localhost/company_website",()=>{
 console.log("db connected")
//  Footer.create({
//   title4:"snsk",
  
//   link4:"https://trainings.internshala.com/",
//   linktext4:"click",
 
//    })

 
// Aboutus.create({
//   title3:"snsk",
//   description3:"ddwesd",
//   link3:"https://trainings.internshala.com/",
//   linktext3:"click",
 
//    })




//  Banner2.create({
//   title2:"snsk",
//   description2:"ddwesd",
//   link2:"https://trainings.internshala.com/",
//   linktext2:"click",
//   imageUrl2:"/static/images/img7.jpg"
//    })



  //  Banner1.create({
  //   title1:"snsk",
  //   description1:"ddwesd",
  //   link1:"https://trainings.internshala.com/",
  //   linktext1:"click",
  //   imageUrl1:"/static/images/img6.jpg"
  // //  })







// Banner.create({
//   title:"snsk",
//   description:"ddwesd",
//   link:"https://trainings.internshala.com/",
//   linktext:"click"

// })




 /* Service.create([
{
    icon:'fas fa-graduation-cap ',
  title:'Tech Driven Courses',
  description:'Our specialized programs are designed to target skills that are essential for the industry 4.0 model, they not only help students to get employment but also shape their thinking in a way that they can generate employment for others as well and take part in nation-building.',
  linkText:'https://developers.google.com/',
  link:'Check',
  link2Text:'https://developers.googleblog.com/',
  link2:'Support'
},

  {
    icon:'fas fa-graduation-cap ',
    title:'Tech Driven Courses',
    description:'Our specialized programs are designed to target skills that are essential for the industry 4.0 model, they not only help students to get employment but also shape their thinking in a way that they can generate employment for others as well and take part in nation-building.',
    linkText:'https://developers.google.com/',
    link:'Check',
    link2Text:'https://developers.googleblog.com/',
    link2:'Support'
  },
  {
    icon:'fas fa-award ',
    title:'Learn Projects',
    description:'Our specialized programs are designed to target skills that are essential for the industry 4.0 model, they not only help students to get employment but also shape their thinking in a way that they can generate employment for others as well and take part in nation-building.',
    linkText:'https://developers.google.com/',
    link:'Check',
    link2Text:'https://developers.googleblog.com/',
    link2:'Support'
  }
  
]) */





// Slider.create([
    // {
    //     title:'Company website',
    //   subTitle:' Made in a dynamic way',
    // imageUrl:"/static/images/image1.jpg"
    //},
    //{
     //   title:'using javascrpit',
      // subTitle:' helped a lot to create dynamic website',
      // imageUrl:"/static/images/image2.jpg"
    //},
    //{
    //    title:'using node js',
     //  subTitle:' helped for the backend',
      // imageUrl:"/static/images/image3.jpg"
    //},
    //{
      //  title:'using mongodb',
       //subTitle:' helped a lot to make the website dynamic and helped in storing the data ',
       //imageUrl:"/static/images/image4.jpg"
    //},
   //])





//     detail.create({
//     brandName:"Tech Pa_&_rmiL",
//     brandIconUrl:"https://icons.getbootstrap.com/icons/p-square-fill/",
//     links : [
//         {
//             label:"Home",
//             url:"/"
//         },
//         {
//             label:"Services",
//             url:"/services"
//         },
//         {
//             label:"Gallery",
//             url:"/gallery"
//         },
//         {
//             label:"About",
//             url:"/about"
//         },
//         {
//             label:"Contact Us",
//             url:"/contact-us"
//         },
//     ]
// })
});
mongoose.connect
app.listen(process.env.PORT | 5556, () => {
    console.log("server started");
});