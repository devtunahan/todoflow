import React from 'react'
import axios from 'axios'

function TodoInput({todos, input, setInput, setTodos}) {

    const addTodo = () => {
      if (!input) alert("Todo Input is empty!"); // Ensure the input is not empty
      if (input.trim()) { // Ensure the input is not just whitespace
        axios.post(`http://localhost:3000/todos`, {title: input, completed: false})
        .then(res => {
          console.log(res);
          console.log(res.data);
          setTodos([...todos, {title: input, completed: false}]);
          setInput(''); // Reset the input field to an empty string
        })
        .catch(error => {
          console.error(error);
        }); // Send a POST request to the server
      }
    }

  return (
    <div className="todo-input-container">
      <input type="text" placeholder="Add a new todo" value={input} onChange={event => setInput(event.target.value)} className="todo-input" />
      <button className="add-todo-btn" onClick={addTodo}>Add</button>
    </div>
  )
}

export default TodoInput