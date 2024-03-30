import React from 'react';
import Header from './Header.jsx';
import './App.css';
import { useEffect, useState } from 'react';
import TodoList from './TodoList.jsx';
import TodoInput from './TodoInput.jsx';
import axios from 'axios';


function App() {

  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);


  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('http://localhost:3000/todos');
        // Destructure data directly from response
        const { data } = response;
        // Update todos state only if data is available and not empty
        if (data && data.length > 0) {
          setTodos(data);
        } else {
          // Handle case where no todos are returned
          console.log('No todos found.');
        }
      } catch (error) {
        // Catch specific error status codes if needed
        if (error.response && error.response.status === 404) {
          console.log('Todos endpoint not found.');
        } else {
          // Handle other errors
          console.error('Error fetching todos:', error);
        }
      }
    };
  
    fetchTodos(); // Call the fetchTodos function when the component mounts
  
    // Clean-up function can be omitted since there are no dependencies
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts
  

  return (
    <>
       <Header />
       <TodoList todos={todos} setTodos={setTodos}/>
       <TodoInput todos={todos} input={input} setTodos={setTodos} setInput={setInput} />
    </>
  )
}

export default App
