const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");

const app = express();
app.use(express.json());

//CRUD=>create,read,update,delete , points for all these minimum

app.get("/todos",async function(req,res){//to get all todos
    const todos = await todo.find();//gives all todos
    res.json({
        todos
    })
})

app.post("/todos",async function(req,res){//create todos
    const createPayload = req.body;
    //check for correct input using zod
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs",
        })
        return;
    }
    // create todo
    try{
        await todo.create({
            title: createPayload.title,
            description: createPayload.description,
            completed: false
        })
    }catch(error){
        res.status(500).json({
            msg:"Something went wrong"
        })
    }

    res.json({
        msg: "Todo created"
    })
})

app.put("/completed",async function(req,res){ //mark them as completed
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs",
        })
        return;
    }
    // mark as complete
    await todo.update({
        _id: req.body.id,
    },{
        completed: true
    })
})

app.listen(3000);