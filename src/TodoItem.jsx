import React, { useState } from 'react';
import axios from 'axios';

function TodoItem({ id, title, completed,todos, setTodos }) {
  const [isCompleted, setIsCompleted] = useState(completed);

  const handleClick = () => {
    console.log("ID is: ", id);
    axios.put(`http://localhost:3000/todos/${id}`, { completed: !isCompleted })
      .then(res => {
        setIsCompleted(res.data.completed);
      })
      .catch(error => {
        console.error(error);
      });

  };

  const handleDelete = () => {
    setTodos(todos.filter(todo => todo._id !== id));
    axios.delete(`http://localhost:3000/todos/${id}`)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleEdit = () => {
    const newTitle = prompt('Enter new title');
    if (newTitle) {
      axios.put(`http://localhost:3000/todos/${id}`, { title: newTitle })
        .then(res => {
          setTodos(todos.map(todo => {
            if (todo._id === id) {
              return { ...todo, title: res.data.title };
            }
            return todo;
          }));
        })
        .catch(error => {
          console.error(error);
        });
    }
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
    <button className="edit-todo-btn" onClick={handleEdit}>Edit</button>
    <button className="delete-todo-btn" onClick={handleDelete}>X</button>
    </div>
    </>
  );
}

export default TodoItem;
