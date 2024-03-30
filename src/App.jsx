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
        const response = await axios.get('http://localhost:3000/todos'); // Ensure correct URL format
        console.log(response.data);
        setTodos(response.data); // Update todos state with the fetched data
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos(); // Call the fetchTodos function when the component mounts
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts


  return (
    <>
       <Header />
       <TodoList todos={todos} />
       <TodoInput todos={todos} input={input} setTodos={setTodos} setInput={setInput} />
    </>
  )
}

export default App
