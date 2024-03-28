import React from 'react';
import Header from './Header.jsx';
import './App.css';
import { useState } from 'react';
import TodoList from './TodoList.jsx';

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Learn React',
      completed: false
    },
    {
      id: 2,
      title: 'Learn Angular',
      completed: false
    },
    {
      id: 3,
      title: 'Learn Vue',
      completed: true
    },
  ]);


  return (
    <>
       <Header />
       <TodoList todos={todos} />
    </>
  )
}

export default App
