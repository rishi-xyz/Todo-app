const zod = require("zod");

// input validation for creating todos
const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
})

// validating input for updatign todos

const updateTodo = zod.object({
    id: zod.string()
})

module.exports = {
    createTodo:createTodo,
    updateTodo:updateTodo,
}