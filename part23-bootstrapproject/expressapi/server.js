const express = require('express');
const cors = require('cors'); // Cross-Origin Resource Sharing
const {v4:uuidv4} = require('uuid')
const bodyParser = require('body-parser'); // Express Middleware
const app = express();
const PORT = 5000;



app.use(cors());
app.use(bodyParser.json());


let aboutUsDatas = {
  whyChooseUs:[
    {icon:"fa-solid fa-bolt",title:"Fast Delivery",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
    {icon:"fa-solid fa-lightbulb",title:"Creative Solutions",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
    {icon:"fa-solid fa-handshake",title:"Client Collaboration",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
  ],
  coreValues:[
    {title:"Integrity",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
    {title:"Innovation",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
    {title:"Customer Focus",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
    {title:"Excellence",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
  ]
};

const ClientSayDatas = [
  {
    name:"Myint Mho",
    role:"CEO,TechSolutions",
    feedback:"The support team was incredibly responsive...",
    rating:5,
    gender:"female",
    avaterId:30
  },
  {
    name:"Maung Oo",
    role:"Director,Blobal Innovations",
    feedback:"24/7 support actually responds",
    rating:4.5,
    gender:"male",
    avaterId:45
  },
  {
    name:"Cho Lae",
    role:"MD,Digital Ventures",
    feedback:"The support team was incredibly responsive...",
    rating:5,
    gender:"female",
    avaterId:65
  }
]


// About Page 
// http://localhost:5000/api/aboutus
app.get("/api/aboutus",(req,res)=>{
  res.json(aboutUsDatas);
});

app.listen(PORT,()=>{
  console.log(`Express Server is running`);
});


// Contact Page 
// http://localhost:5000/api/contacts/clientsays
app.get('/api/contacts/clientsays',(req,res)=>{
  res.json(ClientSayDatas);
});


// http://localhost:5000/api/contacts/formsubmit 
app.post('/api/contacts/formsubmit',(req,res)=>{
  const {name,email,message} = req.body;

  if(!name || !email || !message){
    return res.status(400).json({error:"All fields are required."})
  }

  console.log("Form Datas : ",{name,email,message}); // server.js terminal 

  return res.status(200).json({success:true,message:"Message received."});

});

// 14CS 