import './CreateTodo.css'

export function CreateTodo() {
    return (
        <div className="todo-container">
            <input type="text" placeholder="Title" className="todo-input" />
            <br />
            <input type="text" placeholder="Description" className="todo-input" />
            <br />
            <button className="todo-button">Add a Todo</button>
        </div>
    );
}
