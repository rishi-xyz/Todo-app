import { useState } from 'react';
import './CreateTodo.css'

export function CreateTodo(props){
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    return (
        <div className="todo-container">
            <input type="text" placeholder="Title" className="todo-input" onChange={function(e){
                const value  = e.target.value;//get the value inside the input box [e.target has whole input div]
                setTitle(value);
            }} />
            <br />
            <input type="text" placeholder="Description" className="todo-input" onChange={function(e){
                const descValue = e.target.value;
                setDescription(descValue);
            }} />
            <br />
            <button
             className="todo-button"
             onClick={()=>{
                fetch("http://localhost:3000/todo",{
                    method:"POST",
                    body: JSON.stringify({
                        title:title,//2 ways 1.local state variable 2.react-query
                        description:description
                    }),
                    headers:{
                        "contentType":"application/json"
                    }
                })
                    .then(async function(res){
                        const json = await res.json();
                        alert("Todo is added");
                    })
             }}
            >Add a Todo</button>
        </div>
    );
}
