// express
const express = require('express');
const app = express();
const port = 2000;

// routers
const postsRouter = require('./routers/posts.js')

// accessibile al client
app.use(express.static('public'))

// richiamo del router
app.use('/posts', postsRouter)

// express in attesa
app.listen(port, ()=>{
    console.log(`sono in ascolto sulla porta ${port}`)
})