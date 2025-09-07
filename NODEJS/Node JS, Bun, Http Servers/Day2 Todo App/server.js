import express from "express"

const app = express()

app.use(express.json())

const todos = []

// create a route handler via post request
app.post("/todos/create", (req, res) => {
    const {todo}  = req.body

    // get the todo id from the request body and convert to an integer

    const id = parseInt(req.body.id)

    if(!id){
        return res.send("id cannot be empty")
    }

    // check if todo is already exist 

    for (let i = 0; i < todos.length; i++) {
        if(todos[i].id === id){
            return res.send("Todo is already exist")
        }
        

    }

    // if todo is empty send a response with message "Todo can not be empty"

    if(!todo || todo.trim() === ""){
        return res.send("Todo cannat be empty")
    }

    const newTodo = {
        title: todo,
        id: id
    }


    todos.push(newTodo)

    // send a response with message "Todo added successfully"

    res.send("Todo added successfully")
})

//create a route handler for DELETE request

app.delete("/todos/delete/all", (req, res) => {
    todos.length = 0;

    res.send("All todos deleted successfully")
})


app.delete("/todos/delete/:id", (req, res) => {
    //get the id from the request parameters and convert it to integer
    const todoId = parseInt(req.params.id)

    // create a deleted variable and set it to false
    let deleted = false;

    // create a templates array to store the todos after deleting the todo with the given id

    const tempTodos = [];

    // find the todo with given id from the todos array and delete it

    for (let i = 0; i < todos.length; i++) {
        if(todos[i].id === todoId){
            deleted = true;
            continue
        }

        tempTodos.push(todos[i]);
        
    }

    if(!deleted){
        return res.send("Todo deletd successfully with id " + todoId)
    }

    todos = tempTodos;

    res.send("Todo deleted successfully, " + todoId)


})


// create a route handler for put (UPDATE) request


app.put("/todos/update/:id", (req, res) => {

    const {todo} = req.body


    //get the todo id from the request parameters and convert it to integer

    const todoId = parseInt(req.params.id)

    //check if todo is empty 

    if(!todo || todo.trim() === ""){
        return res.send("Todo cannot be empty")
    }

    // create a updated variable and set it to false

    let updated = false;

    // find the todo with the given id from the todos array and update the title

    for (let i = 0; i < todos.length; i++) {
        if(todos[i].id === todoId){
            todos[i].title = todo
            updated = true;
        }
        
    }

    if(!updated){
        return res.send("Todo not found with id " + todoId)
    }


    res.send("todo updated successfully")
})



// create a route handler for GET (Read) request


app.get("/todos/read/all", (req, res) => {
    // if no todos are found

    if(todos.length === 0){
        return res.send("No Todos found")
    }

    // send the todos array as response


    res.send(todos)
})


app.get("/todos/read/:id", (req, res) => {
    const todoId = parseInt(req.params.id)


    const todo = todos.find((todo) => todo.id === todoId)


    if(!todo){
        return res.send("todo not found with id " + todoId)
    }

    res.send(todo)
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})