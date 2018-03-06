const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
  describe: 'title of note',
  demand: true,
  alias: 't'
};
const bodyOptions = {
  describe: 'body of note',
  demand: true,
  alias: 'b'
}

const argv = yargs
.command('add', 'add a new note', {
  title: titleOptions,
  body: bodyOptions
})
.command('list', 'list all notes')
.command('read', 'read note', {
  title: titleOptions
})
.command('remove', 'remove note', {
  title:titleOptions
})
.help()
.argv;



// var command = process.argv[2];
var command = argv._[0];
// console.log('Command: ', command);
// console.log('Process:', process.argv);
// console.log('Yargs: ',argv);

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created');
    notes.logNote(note);
  } else {
    console.log('Note title taken');
  }
} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`printing ${allNotes.length} notes.`);
  allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log('Note found');
    notes.logNote(note);
  } else {
    console.log('Note not found');
  }
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
} else {
  console.log('Command not recognized');
}
