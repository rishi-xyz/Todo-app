import React from 'react';
import './Todos.css';

export function Todos() {
    return (
        <div className="todos-container">
            <div className="todo-item">
                <h1>Go to gym</h1><br/>
                <h2>You need to go Gym</h2><br/>
                <button className="Markasdone-button">Mark As Done</button>
            </div>
        </div>
    );
}
