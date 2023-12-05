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

module.exports = router;
