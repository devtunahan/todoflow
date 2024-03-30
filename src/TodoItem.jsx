import React, { useState } from 'react';
import axios from 'axios';

function TodoItem({ id, title, completed }) {
  const [isCompleted, setIsCompleted] = useState(completed);

  const handleClick = () => {
    axios.put(`http://localhost:3000/todos/${id}`, { completed: !isCompleted })
      .then(res => {
        setIsCompleted(res.data.completed);
        console.log(res);
        console.log(res.data);
      })
      .catch(error => {
        console.error(error);
      });

  };
  return (
    <>
    <div className="todo-row">
    <li
      className="todo-item"
      id={id}
      onClick={handleClick}
      style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}
    >
      {title}
    </li>
    <button className="delete-todo-btn">X</button>
    </div>
    </>


  );
}

export default TodoItem;
