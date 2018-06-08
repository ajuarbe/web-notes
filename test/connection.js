const mongoose = require('mongoose');
// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const morgan = require('morgan');
// connect to mongodb
// mongoose.connect('mongo://localhost/webnotes');

let noteSchema = mongoose.Schema ({
  cardBody: String
});

let Note = mongoose.model('Note', noteSchema);

// Note.save((err, note) => {
//   if (err) {
//     console.log(`Error on page: ${err}`);
//   }else {
//     console.log(note);
//   }
// });

// mongoose.connection.once('open', () => {
//   console.log('Connection has been made...');
// }).on('error', (error) => {
//   console.log(`Connection error: ${error}`);
// });
module.exports = Note;