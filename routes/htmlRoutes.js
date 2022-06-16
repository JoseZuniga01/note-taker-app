var path = require('path');
var router = require('express').Router();

//HTML routing 
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

//index.html function
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = router;