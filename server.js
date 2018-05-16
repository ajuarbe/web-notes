const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const notes = [
  'http is a protocol',
  'http requests have a url, method, header, and body',
  'This is me adding another note'
];
// app.get('/', (req, res) => res.send('Web Notes'));
// app.use('/', express.static('views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/css', express.static('css'));

app.get('/', (req, res) => {
  res.render('notes', { notes: notes });
});

app.post('/notes', (req, res) => {
  notes.push(req.body.note);
  res.redirect('/');
});

app.delete('/notes', (req, res) => {

})

app.set('view engine', 'ejs');

app.listen(3000, () => console.log('Example app listening on port 3000!'));
