console.log(' Starting App');

const fs = require('fs');
const notes = require('./notes.js');
const yargs = require('yargs');

const titleCommand = {
    describe:'Title of note',
    demand: true,
    alias: 't'
};

const bodyCommand = {
    describe:'Body of note',
    demand: true,
    alias: 'b'
};
const argv = yargs
.command('add','Add a new note',{
    title:titleCommand,
    body:bodyCommand
})
.command('list','List all notes')
.command('read','Read a command',{
    title:titleCommand
})
.command('remove','Remove a node',{
    title:titleCommand
})
.help()
.argv;
const _ = require('lodash');


var command = process.argv[2];

console.log('Command:', command);
console.log('Process',process.argv);
console.log('Yargs',argv);
if(command === 'list'){
    var allNotes = notes.getAll();
    console.log(`Total of ${allNotes.length} node(s)`);
    allNotes.forEach((note) => {
         console.log('------------');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
    });

}else if(command === 'add'){
    var note = notes.addNotes(argv.title, argv.body);
    if(note){
        console.log('Note created ');
        console.log('------------');
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);    
    }else{
        console.log('Note already taken');
    }
    console.log('Command displaying is add');
}else if(command === 'remove'){
    var noteRemoved = notes.removeNotes(argv.title);
    var message = noteRemoved ? 'Note successfully removed': 'Note not removed';
    console.log(message);
    console.log('Command displaying is remove');
}else if(command === 'read'){
    var readNote = notes.getNote(argv.title);
    if(readNote){
    console.log('Note Read ');
    console.log('------------');
    console.log(`Title: ${readNote.title}`);
    console.log(`Body: ${readNote.body}`);
    }else{
        console.log('Note cannot be read');
    }
}else{
    console.log('Command not recognized');
}
