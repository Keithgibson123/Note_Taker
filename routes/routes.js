// Always add in your dependencies 
const path = require('path');
const fs = require('fs')



// routing
module.exports = (app) => {

  app.get('/api/notes', function(req, res)  {
    res.sendFile(path.join(__dirname, '../db/db.json'));
  });

  // This is the post /api/notes 
  app.post('/api/notes', function(req, res)  {
    let db = fs.readFileSync('db/db.json');
    db = JSON.parse(db);
    res.json(db);
    //This is making a body
    let userNote = {
      title: req.body.title,
      text: req.body.text,
      
    };
    // This is making a push file for the db
    db.push(userNote);
    fs.writeFileSync('db/db.json', JSON.stringify(db));
    res.json(db);

  });
  
  //this should be creating routes 
    app.get('/notes', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/notes.html'));
    });
  
    // this is a get route that will return the index.html
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/index.html'));
    })



  // This is the delete
  app.delete('/api/notes/:id', function(req, res)  {
    let db = JSON.parse(fs.readFileSync('db/db.json'))
    
  })
};