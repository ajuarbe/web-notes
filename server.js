const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

const notes = [
  'http is a protocol',
  'http requests have a url, method, header, and body',
  'This is me adding another note'
];
// app.get('/', (req, res) => res.send('Web Notes'));
// app.use('/', express.static('views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use('/css', express.static('css'));
app.use('/js', express.static('js')) 

app.get('/', (req, res) => {
  res.render('notes', { notes: notes });
});

app.post('/notes', (req, res) => {
  notes.push(req.body.note);
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



app.listen(3000, () => console.log('Listening on port 3000!'));
