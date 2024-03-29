import React, { useState } from 'react';

function TodoItem({ id, title, completed }) {
  const [isCompleted, setIsCompleted] = useState(completed);

  const handleClick = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <>
        <li
      className="todo-item"
      id={id}
      onClick={handleClick}
      style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}
    >
      {title}
    </li>
    </>


  );
}

export default TodoItem;
