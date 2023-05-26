const express = require('express')
const app = express()
const port = 4050

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.json('hola')
})

app.listen(port, ()=>{
    console.log('escuchando server en puerto '+ port)
})