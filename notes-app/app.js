const yargs = require('yargs')
const notes = require('./notes')

//  Customize yargs version
yargs.version('1.0.0')

//  Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note",
            demandOption: true,
            type: 'string'
        }
    },
    handler: () => notes.addNote(yargs.argv.title, yargs.argv.body)
})

//  Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a existing note',
    builder: {
        title: {
            describe: "Note Title to remove",
            demandOption: true,
            type: 'string'
        }
    },
    handler: () => {
        console.log('Removing note ' + yargs.argv.title + ' ..')
        notes.removeNote(yargs.argv.title)
    }
})

//  Create list command
yargs.command({
    command: 'list',
    describe: 'List the created notes',
    handler: () => notes.listNotes()
})

//  Create read command
yargs.command({
    command: 'read',
    describe: 'Read an existing note',
    builder: {
        title: {
            describe: 'Title of the note to read',
            demandOption: true,
            type: 'string'
        }
    },
    handler:  () => notes.readNote(yargs.argv.title) 
})


yargs.parse()
// console.log(process.argv)
// console.log(yargs.argv)
//  add, remove, read, list 
