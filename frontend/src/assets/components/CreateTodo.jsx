import { useState } from 'react';
import './CreateTodo.css';

export function CreateTodo(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = async () => {
    try {
      const res = await fetch("http://localhost:3000/todos", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          description: description,
          completed: false,
        }),
        headers: {
          "Content-Type": "application/json", // Correct header key
        },
      });

      if (!res.ok) {
        throw new Error("Failed to add todo");
      }

      const json = await res.json();
      alert("Todo is added");

      // Resetting the input fields after a successful addition
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error adding todo:", error);
      alert("Failed to add todo");
    }
  };

  return (
    <div className="todo-container">
      <input
        type="text"
        placeholder="Title"
        className="todo-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Description"
        className="todo-input"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button className="todo-button" onClick={handleAddTodo}>
        Add a Todo
      </button>
    </div>
  );
}
