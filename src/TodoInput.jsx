import React from 'react'
import axios from 'axios'

function TodoInput({todos, input, setInput, setTodos}) {

  const addTodo = () => {
    if (!input) {
      alert("Todo Input is empty!"); // Ensure the input is not empty
      return;
    }
    if (input.trim()) { // Ensure the input is not just whitespace
      axios.post(`http://localhost:3000/todos`, { title: input, completed: false })
        .then(res => {
          const newTodo = res.data;
          console.log(newTodo);
         setTodos([...todos, newTodo]);
          setInput('');
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
  
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className="todo-input-container">
      <input 
        type="text" 
        placeholder="Add a new todo" value={input} 
        onChange={event => setInput(event.target.value)}         
        onKeyDown={handleKeyPress}
        className="todo-input" />

      <button className="add-todo-btn" onClick={addTodo}>Add</button>
    </div>
  )
}

export default TodoInput