import React from 'react'

function TodoItem({id, title, completed}) {
  return (
    completed ? <li className="todo-item" id={id} style={{textDecoration: 'line-through'}}>{title}</li> : <li className="todo-item" id={id}>{title}</li>
  )
}

export default TodoItem