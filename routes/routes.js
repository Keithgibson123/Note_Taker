// dependencies 
const path = require('path');
const fs = require('fs')
var uniqid = require('uniqid');

// routing
module.exports = (app) => {

  app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
  });

  // This is the post /api/notes 
  app.post('/api/notes', (req, res) => {
    let db = fs.readFileSync('db/db.json');
    db = JSON.parse(db);
    res.json(db);
    //This is making a body
    let userNote = {
      title: req.body.title,
      text: req.body.text,
      //calling for the unique id
      id: uniqid(),
    };
    // This is making a push file for the db
    db.push(userNote);
    fs.writeFileSync('db/db.json', JSON.stringify(db));
    res.json(db);

  });


  // This is the delete
  app.delete('/api/notes/:id', (req, res) => {
    let db = JSON.parse(fs.readFileSync('db/db.json'))
    
  })
};