var router = require('express').Router();
var save = require('../db/save');

// API routing: 
//Should read the DB file and return all the saved notes as json 
router.get('/notes', (req, res) => {
    save
        .getNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});

// receive new note to be saved to DB 
router.post('/notes', (req, res) => {
    save
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch(err => res.status(500).json(err));
});

//Finds notes by ID and deletes objects based on matching index 
router.delete('/notes/:id', function (req, res) {
    save
        .deleteNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err));
});


module.exports = router;