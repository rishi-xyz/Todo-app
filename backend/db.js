const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://itsranahrishikesh:BvFaj7rhKgifcr8v@cluster0.reeymeq.mongodb.net/todo-app");
//usually goes to a .env file

const todoschema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})
const todo = mongoose.model('todos',todoschema);// here todos is name of the collection which is using todoschema as its schema


module.exports = {
    todo
}