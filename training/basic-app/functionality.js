const fs = require("fs")
const chalk = require("chalk")
const addNote = (title, body) => {
    const notes = getNotes();
    const filtered = notes.find(note => note.title === title);

    if (!filtered) {
        const notesAdd = [...notes, { title: title, body: body }];
        console.log(chalk.bgGreen("Note added"));
        updateNotes(notesAdd);
    } else {
        console.log(chalk.bgRed("Note alreday exist!"));
    }
}

const removeNote = (title) => {
    const notes = getNotes();
    const newNotes = notes.filter(note => note.title !== title);
    if (newNotes.length !== notes.length) {
        updateNotes(newNotes);
        console.log(chalk.bgGreen("Note removed"));
    }
    else {
        console.log(chalk.bgRed("No note found!"));
    }
}

const listNotes = () => {
    const notes = getNotes();
    console.log(chalk.bgMagenta("Your Notes:"));
    notes.forEach(note => {
        console.log(chalk.bgGrey(note.title));
    });
}

const readNote = (title) => {
    const notes = getNotes();
    const note = notes.find(note => note.title === title);

    if (note) {
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse("No note found!"));
    }
}

const updateNotes = (notes) => {
    fs.writeFileSync("notes.json", JSON.stringify(notes));
}

const getNotes = () => {
    try {
        const buffer = fs.readFileSync("notes.json")
        return (JSON.parse(buffer.toString()))
    } catch {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote:readNote
}