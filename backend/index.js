const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors({
    origin: process.env.CLIENT_URL, 
}));

// CRUD => Create, Read, Update, Delete endpoints

// Get all todos
app.get("/todos", async function(req, res) {
    try {
        const todos = await todo.find();
        res.json({ todos });
    } catch (error) {
        res.status(500).json({
            msg: "Failed to fetch todos",
            error: error.message
        });
    }
});

// Create a new todo
app.post("/todos", async function(req, res) {
    const createPayload = req.body;

    // Validate input using Zod
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        return res.status(400).json({
            msg: "Invalid input",
        });
    }

    // Create the todo
    try {
        await todo.create({
            title: createPayload.title,
            description: createPayload.description,
            completed: false
        });
        res.json({ msg: "Todo created successfully" });
    } catch (error) {
        res.status(500).json({
            msg: "Error creating todo",
            error: error.message
        });
    }
});

// Update todo status to completed
app.put("/completed", async function(req, res) {
    const updatePayload = req.body;

    // Validate input using Zod
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        return res.status(400).json({
            msg: "Invalid input",
        });
    }

    try {
        await todo.updateOne({
            _id: req.body.id,
        }, {
            completed: true
        });
        res.json({ msg: "Todo marked as completed" });
    } catch (error) {
        res.status(500).json({
            msg: "Error updating todo",
            error: error.message
        });
    }
});

// Start the server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
