import './App.css'
import { CreateTodo } from './assets/components/CreateTodo'
import { Todos } from './assets/components/Todos'

function App() {
  return (
    <>
      <div>
        <CreateTodo></CreateTodo>
        <Todos></Todos>
      </div>
    </>
  )
}

export default App
