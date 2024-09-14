import { CreateTodo } from '../assets/components/CreateTodo';
import { Todos } from '../assets/components/Todos';
import { useState,useEffect } from 'react';

const Dashboard = ()=>{
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
        <CreateTodo  fetchtodo={fetchtodo} />
        <Todos todos={todos}></Todos>
    </>
    );
};
export default Dashboard;