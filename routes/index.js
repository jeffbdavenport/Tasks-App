var express = require('express');
var router = express.Router();
var { db } = require('../app.js');
var mongoose = require('mongoose');

// Task Schema
const taskSchema = new mongoose.Schema({
  name: String,
  content: String
});

const Task = mongoose.model('Task', taskSchema);

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


// GET Get an array of all the tasks
router.get('/tasks', function (req, res, next) {
  res.json({ tasks: [] });
});

// GET Get an array of all the tasks
router.get('/tasks/:id', function (req, res, next) {

  console.log('Request Id:', req.params.id);

  res.json({ tasks: [req.params.id] });
});


// POST Create a new task
router.post('/tasks/create', function (req, res, next) {

  console.log('Request Id:', req.params.id);

  try {
    const newTask = new Task({
      name: request.params.name,
      content: request.params.content
    });
    newTask.save().then(() => {
      res.status(200).send({ success: "OK" })
    })
      .catch((error) => {
        res.status(500).send({ error: error });
      });
  } catch (error) {
    res.status(500).send({ error: error });
  }
});
module.exports = router;
