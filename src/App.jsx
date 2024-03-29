import React from 'react';
import Header from './Header.jsx';
import './App.css';
import { useState } from 'react';
import TodoList from './TodoList.jsx';
import TodoInput from './TodoInput.jsx';

function App() {

  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);


  return (
    <>
       <Header />
       <TodoList todos={todos} />
       <TodoInput todos={todos} input={input} setTodos={setTodos} setInput={setInput} />
    </>
  )
}

export default App
