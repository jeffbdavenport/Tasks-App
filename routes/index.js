var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const server = '127.0.0.1:27017';
const database = 'TaskApp';

class Database {
  constructor() {
    this._connect();
  }
  _connect() {
    mongoose
      .connect(`mongodb://${server}/${database}`)
      .then(() => {
        console.log('Database connection successful');
      })
      .catch((err) => {
        console.error('Database connection failed');
      });
  }
}

const db = new Database();

// Task Schema
const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

const Task = mongoose.model('Task', taskSchema);

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


// GET Get an array of all the tasks
router.get('/tasks', function (req, res, next) {
  Task.find({}).exec().then(function (tasks) {
    res.json({ tasks: tasks });
  });
});

// GET Get an array of all the tasks
router.get('/tasks/:id', function (req, res, next) {
  Task.findById(req.params.id).exec().then(function (task) {
    res.json({ task: task });
  }).catch(function (error) {
    console.log(error);
    res.status(500).send({ error: error });
  });
});


// POST Create a new task
router.post('/tasks/create', function (req, res, next) {

  Task.create(req.body).then(() => {
    res.status(200).send({ success: req.body });
  }).catch((error) => {
    console.log(error);
    res.status(500).send({ error: error });
  });
});
module.exports = router;
