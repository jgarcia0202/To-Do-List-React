import React from "react";
import Todo from "./Todo";

export default function TodoList( { todos, setTodos, filteredTodos }){
    
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo 
                    setTodos={setTodos} 
                    text={todo.text} 
                    todos={todos}
                    todo={todo}
                    key={todo.id}/>
                    
                ))}
            </ul>
        </div>
    )
    
}



















/*todos[0].map(todo => {
            return(
                <Todo key={todo.id} todo={todo}/>
            )
        }) */