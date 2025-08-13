const express = require('express');
const cors = require('cors'); // Cross-Origin Resource Sharing
const {v4:uuidv4} = require('uuid')
const bodyParser = require('body-parser'); // Express Middleware
const app = express();
const PORT = 5000;



app.use(cors());
app.use(bodyParser.json());


let aboutUsDatas = {
  whyChooseUs: [
    { 
      icon: "fa-solid fa-bolt",
      title:"Fast Delivery",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, molestias."
    },
    { 
      icon: "fa-solid fa-lightbulb",
      title:"Creative Solutions",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, molestias."
    },
    { 
      icon: "fa-solid fa-handshake",
      title:"Client Collaboration",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, molestias."
    }
  ],
  coreValues:
    [
      {
      title:"Integrity", 
     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, molestias."
    },
    {
      title:"Innovation", 
     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, molestias."
    },
    {
      title:"Customer Focus", 
     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, molestias."
    },
    {
      title:"Excellence", 
     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, molestias."
    }
  ]
  
};
  
// About Page 
// http://localhost:5000/api/todos
app.get("/api/aboutus",(req,res)=>{
  res.json(aboutUsDatas);
});



app.listen(PORT,()=>{
  console.log(`Express Server is running`);
});


// 19PD 