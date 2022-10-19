const router = require('express').Router();
const fs = require("fs");
const path = require("path");

const notes = require('../../db/db.json');

router.get('/notes', (req, res) => {
  let results = notes;
  res.json(results);
});

router.post('/notes', (req, res) => {
  req.body.id = notes.length + 1

  notes.push(req.body)

  fs.writeFileSync(
    path.join(__dirname, '../../db/db.json'),
    JSON.stringify(notes, null, 2)
  );
});

module.exports  = router;