import { CreateTodo } from '../assets/components/CreateTodo';
import { Todos } from '../assets/components/Todos';
import { useState, useEffect } from 'react';

const Dashboard = () => {
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState(null);

    const fetchtodo = async () => {
        try {
            const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/todos`);
            const contentType = res.headers.get("content-type");
    
            if (contentType && contentType.includes("application/json")) {
                const json = await res.json();
                setTodos(json.todos);
            } else {
                throw new Error("Expected JSON response but received something else.");
            }
        } catch (error) {
            setError(error.message);
        }
    };
    

    useEffect(() => {
        fetchtodo();
    }, []);

    return (
        <>
            {error && <p className="error-message">{error}</p>}
            <CreateTodo fetchtodo={fetchtodo} />
            <Todos todos={todos} />
        </>
    );
};

export default Dashboard;