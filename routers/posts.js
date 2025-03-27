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
    const currentId = req.params.id
    console.log(currentId)
    const currentPost = posts.find(post => post.slug === currentId)
    res.json(currentPost)
})

// store
router.post('/',(req,res) => {
    res.send('creazione nuovo post')
})

// update
router.put('/:title',(req,res) => {
    res.send('modifica di un post')
})

// modify
router.patch('/:title',(req,res) => {
    res.send('modifica di parte di un post')
})

// destroy
router.delete('/:title',(req,res) => {
    res.send('ccancellazione di un post post')
})

// esportazione router
module.exports = router