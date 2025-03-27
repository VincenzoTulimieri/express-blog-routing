// express
const express = require('express');
const app = express();
const port = 2000;

// importazione dati
const posts = require('./data/posts.js')

app.get('/posts',(req,res) => {
    res.json(posts)
})

app.get('/', (req,res)=>{
    res.send('Server del mio blog')
})



// express in attesa
app.listen(port, ()=>{
    console.log(`sono in ascolto sulla porta ${port}`)
})