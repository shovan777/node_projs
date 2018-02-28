console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
// var command = process.argv[2];
var command = argv._[0];
console.log('Command: ', command);
console.log('Process:', process.argv);
console.log('Yargs: ',argv);

if(command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (!note) {
    console.log('note not created');
  } else {
    console.log("note added with title: ", note.title, "body: ", note.body);
  }
} else if (command === 'list') {
  // console.log('listing all the beautiful things in life.');
  notes.getAll();
} else if (command === 'read') {
  console.log('reading all the beautiful things in life.')
} else if (command === 'remove') {
  // console.log('moving all the beautiful things in life.')
  var noteRemoveFlag = notes.removeNote(argv.title);
  console.log(noteRemoveFlag ? 'Note was removed' : 'note was not removed');
} else {
  console.log('you gave a shit command.')
}
