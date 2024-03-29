import React from 'react'

function TodoInput({todos, input, setInput, setTodos}) {

    const addTodo = () => {
        if (!input) alert("Todo Input is empty!"); // Ensure the input is not empty
        if (input.trim()) { // Ensure the input is not just whitespace
            setTodos([...todos, {id: todos.length + 1, title: input, completed: false}]);
            setInput(''); // Reset the input field to an empty string
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