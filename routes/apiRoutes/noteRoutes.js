const router = require('express').Router();

const { notes } = require('../../db/db');

router.get('/notes', (req, res) => {
  let results = notes;
  res.json(results);
});

router.post('/notes', (req, res) => {
  // set id based on what the next index of the array will be
  console.log(req.body)
  req.body.id = notes.length.toString();
});

module.exports  = router;