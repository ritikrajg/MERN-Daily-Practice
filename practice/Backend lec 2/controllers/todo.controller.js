const Todo = require("../models/todoSchema");

// Create a new todo
exports.createTodo = async (req, res) => {
  try {
    const newTodo = new Todo(req.body);
    const result = await newTodo.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all todos OR a specific one by ID
exports.getTodos = async (req, res) => {
  try {
    const { id } = req.params;
    
    if (id) {
      const todo = await Todo.findById(id);
      if (!todo) {
        return res.status(404).json({ error: "Todo not found" });
      }
      res.json(todo);
    } else {
      const todos = await Todo.find();
      res.json(todos);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a todo
exports.updateTodo = async (req, res) => {
  try {
    const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a todo
exports.deleteTodo = async (req, res) => {
  try {
    const deleted = await Todo.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
