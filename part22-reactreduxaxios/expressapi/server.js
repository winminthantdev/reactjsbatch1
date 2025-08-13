const express = require("express");
const cors = require('cors'); // Cross-Origin Resource Sharing
const {v4:uuid4} = require('uuid')
const app = express();

const bodyParser = require('body-parser'); // Express Middleware
const PORT = 5000;

app.use(cors());
// app.use(express.json());
app.use(bodyParser.json());


let todos = [
    // {id:1,title:"Have to go",completed:false},
    // {id:2,title:"Have to eat",completed:false},
    // {id:3,title:"Have to shop",completed:false},
    // {id:4,title:"Have to cook",completed:true},
    // {id:5,title:"Have to visit",completed:true}
];


// All todos
// http://localhost:5000/api/todos
app.get("/api/todos",(req,res)=>{
    res.json(todos)
});

// Add New Todo
app.post("/api/todos",(req,res)=>{
    const {title} = req.body;
    const newtodo = {id:uuid4(),title,completed:false};
    todos.push(newtodo);
    res.status(200).json(newtodo);
});

// Update todo
app.put("/api/todos/:id",(req,res)=>{  
    const {id} = req.params;
    const {title,completed} = req.body;
    todos = todos.map(todo => todo.id == id ? {...todo, title, completed }: todo);
    res.json({id,title,completed});
});

// Delete todo
app.delete("/api/todos/:id",(req,res)=>{ 
    // const {id} = req.params;
    // const todo = todos.find(todo => todo.id == id);
    // if(!todo){
    //     return res.status(404).json({message:"todo not found"});
    // }
    // todos = todos.filter(todo => todo.id != id );
    // res.status(204).send(); // successfully 

    try {
            const {id} = req.params;

            const todoindex = todos.findIndex(todo => todo.id == id);

            if(todoindex === -1){
                return res.status(404).json({message:"todo not found"});
            }
            todos.splice(todoindex,1);
            res.status(204).send();
    } catch (error) {
        console.log("Error", error);
    }

});


app.listen(PORT,()=>{
    console.log(`Express Server is running on https://localhost:${PORT}`);
});

// 19PD 