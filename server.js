const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Note = require('./test/connection');
mongoose.connect('mongodb://localhost/webnotes');

// const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://localhost:3000/';


// const notes = [
//   'http is a protocol',
//   'http requests have a url, method, header, and body',
//   'This is me adding another note'
// ];
// app.get('/', (req, res) => res.send('Web Notes'));
// app.use('/', express.static('views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));

// MongoClient.connect(url, (err, db) => {
//   if (err) throw err;
//   let dbo = db.db('webnotesapp');
//   dbo.createCollection('notes', (err, res) => {
//     if (err) throw err;
//     console.log('Collection created!');
//     db.close();
//   })
// })

app.get('/', (req, res) => {
  Note.find({}, (err, noteCollection) => {
    if (err) return console.log(err);
    console.log(noteCollection);
    res.render('notes', {notes:noteCollection});
  })
});

app.post('/notes', (req, res) => {
  Note.create({
    cardBody: req.body.note
  }, (err, newNote) => {
    if(err) return console.log(`Error message: ${err}`);
    console.log('New note posted!');
  })
  res.redirect('/');
});

app.put('/notes/:id', (req, res) => {
  if(req.params.id >= 0 && req.params.id < notes.length){
    notes[req.params.id] = req.body.note;
    res.redirect('/');
  }else{
    res.status(404).send('***NOTE DOES NOT EXIST***');
  }
});

app.delete('/notes/:id', (req, res) => {
  const {id} = req.params;
  if(id < notes.length && id >= 0){
    notes.splice(id)
    res.send('*** NOTE DELETED ***')
  }else {
    res.status(404).send('Error');
    };
})



app.listen(port, () => console.log(`Listening on port ${port}!`));

