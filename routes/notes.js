const notes = require('express').Router();
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

notes.get('/', (req, res) =>
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

notes.post('/', (req, res) => {
    const { title, text } = req.body;

    if(title && text) {
        const newNotes = {
            title,
            test,
        };

        readAndAppend(newNotes, './db/db.json');

        const response = {
            status: 'Success!',
            body: newNotes,
        };

        res.json(response);
    } else {
        res.json('Error creating new note');
    }
});

module.exports = notes;