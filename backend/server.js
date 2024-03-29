const express = require('express');
const mongoose = require('mongoose');
const Todo = require('./models/Todo'); // Import the Todo model

const app = express();

mongoose.connect('mongodb://localhost:27017/todoflow', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Your routes and other server logic go here

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

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
    try {
      const { title, description, completed } = req.body;
      const newTodo = new Todo({
        title,
        description,
        completed,
      });
      await newTodo.save();
      res.status(201).json(newTodo);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  