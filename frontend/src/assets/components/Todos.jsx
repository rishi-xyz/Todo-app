import './Todos.css';

export function Todos({todos}) {
    return (
        <div className='outerbox'>
            {todos.map(function(todo) {
                return (
                    <div key={todo.id} className="todos-container"> {/* key added here */}
                        <div className="todo-item">
                            <h1>{todo.title}</h1><br/>
                            <h2>{todo.description}</h2><br/>
                            <button className="Markasdone-button">
                                {todo.completed === true ? "Task Completed" : "Mark as Done"}
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
