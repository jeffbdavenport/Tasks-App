var express = require('express');
var router = express.Router();

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

  res.json({ tasks: [req.params.id] });

  // res.status(500).send({ error: err });
});
module.exports = router;
