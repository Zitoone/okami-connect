const express = require('express')
const app = express()
require ('dotenv').config()
const port = process.env.PORT

app.get('/', (req,res)=>{
    res.send('Bienvenue sur votre API RESTful OKAMI!')
})

    app.listen(port, ()=>{
console.log(`Serveur démarré sur http://localhost:${port}`)
})