import React from 'react'
import TodoItem from './TodoItem'

function TodoList({todos, setTodos}) {

    return (
        <ul className='todo-item-list'>
            {todos.map((todo, key) => (<TodoItem key={key++} id={todo._id} title={todo.title} completed={todo.completed} todos={todos} setTodos={setTodos}/>))}
        </ul>
    )
}

export default TodoList