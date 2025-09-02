import { useState } from 'react'

function App() {
  const [todo, setTodo] = useState([{
    title: "Got to gym",
    description: "Hit The gym regularily",
    done: false
  }])

  function addTodo(){
    let newArray = []
    for (let i = 0; i < todo.length; i++) {
      newArray.push(todo[i])
    }

    newArray.push({
      title: document.getElementById('title').value,
      description: document.getElementById('description').value,
      done: false
    })

    setTodo(newArray)

  }

  return (
    <>
      <input id='title' type="text" placeholder='Title' />
      <input id='description' type="text" placeholder='Description'/>
      
      <button onClick={addTodo}>Add todo</button>
     {todo.map((todo) => (
       <Todo 
          title={todo.title} 
          description={todo.description} 
          done={todo.done} />
     ))}
    </>
  )
}


function Todo(props){
   return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <h3>{props.done}</h3>
    </div>
   )
}

export default App
