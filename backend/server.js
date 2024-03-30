const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Todo = require('./models/Todo'); // Import the Todo model
const { default: axios } = require('axios');

const app = express();

app.use(express.json());
app.use(cors()); // Enable CORS middleware

mongoose.connect('mongodb://localhost:27017/todoflow')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Route to get all todos
app.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.find(); // Retrieve all todos from the database
    res.json(todos); // Send the todos as a JSON response
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/todos', async (req, res) => {
  const { title, completed } = req.body;
  try {
    const newTodo = new Todo({ title, completed }); // Create a new todo object
    const savedTodo = await newTodo.save(); // Save the new todo to the database
    console.log(savedTodo);
    res.json(savedTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put('/todos/:id', async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(id, { title, completed }, { new: true }); // Find the todo by id and update it
    console.log(updatedTodo);
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete('/todos/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTodo = await Todo.findByIdAndDelete(id); // Find the todo by id and delete it
    console.log(deletedTodo);
    res.json(deletedTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
