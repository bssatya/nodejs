const fs = require('fs')
const chalk = require('chalk')

const getNotes =  () => {
    return 'Your Notes...'
}

const addNote =  (title, body) => {
    const notes = loadNotes()
    
    const duplicateNote = notes.find( (note) => note.title === title )

    if (duplicateNote) {
        console.log(chalk.red.inverse("Title already taken"))
        return
    }

    notes.push({
        title: title,
        body: body
    })

    saveNotes(notes)
    console.log(chalk.green.inverse('Note ' + title + ' Added'))
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter ( (note) => note.title != title )

    if (notes.length === notesToKeep.length) {
        console.log(chalk.red.inverse('Note ' + title + ' not found'))
    } else {
        saveNotes(notesToKeep)
        console.log('Note ' + chalk.red(title) + chalk.green(' removed'))
    }
}

const listNotes = () => {
    const notes = loadNotes()

    if (notes.length > 0) {
        console.log(chalk.bold.yellow.underline('Listing the notes'))
        notes.forEach( (note) => console.log(chalk.blue.bold(note.body)))
    } else { 
        console.log(chalk.red.inverse('Notes not found...'))
    }
}

const saveNotes = (notes) => {
    const notesJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', notesJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}
