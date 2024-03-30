import React from 'react'
import TodoItem from './TodoItem'

function TodoList({todos}) {
    return (
        <ul className='todo-item-list'>
            {todos.map((todo) => (<TodoItem key={todo._id} id={todo._id} title={todo.title} completed={todo.completed} />))}
        </ul>
    )
}

export default TodoList