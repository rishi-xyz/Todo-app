import { useState, useCallback, useMemo, useEffect } from 'react'
import './App.css'
import { CreateTodo } from './assets/components/CreateTodo'
import { Todos } from './assets/components/Todos'

function App() {
  const [todos, setTodos] = useState([]);
  
  const fetchtodo = ()=>{
    fetch("http://localhost:3000/todos")
      .then(async function(res){
        const json = await res.json();
        setTodos(json.todos);
      })
  }

  useEffect(()=>{
    fetchtodo();
  },[]);
  
  return (
    <>
      <div>
        <CreateTodo  fetchtodo={fetchtodo}></CreateTodo> {/*this will trigger fetch todo to fetch todods again*/}
        <Todos todos={todos}></Todos>
      </div>
    </>
  )
}

export default App
