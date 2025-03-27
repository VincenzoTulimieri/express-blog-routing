// express
const express = require('express');
const router = express.Router();

// importazione dati
const posts = require('../data/posts.js')

// index
router.get('/', (req,res)=>{
    res.json(posts)
})
// show
router.get('/:id',(req,res) => {
    res.json('dettagli del post')
})

// store
router.post('/',(req,res) => {
    res.send('creazione nuovo post')
})
// update
router.put('/:id',(req,res) => {
    res.send('modifica di un post')
})
// modify
router.patch('/:id',(req,res) => {
    res.send('modifica di parte di un post')
})
// destroy
router.delete('/:id',(req,res) => {
    res.send('ccancellazione di un post post')
})

module.exports = router