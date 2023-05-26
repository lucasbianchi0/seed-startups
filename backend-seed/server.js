const express = require('express')
const connectDB= require('./db/mongodb')
const startups= require('./models/startupSchema')
const app = express()
const port = 4050
connectDB()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',async(req,res)=>{
    const newStartup = {
        nombre: 'miubi',
        descripcionCorta:'app de ecommerce de cercania',
        descripcionGeneral:'app de ecommerce de cercania',
        categoria:'ecommerce',
    }
    const postSTP = await startups.create(newStartup).save()
    res.json('hola')
})

app.get('/startups',async(req,res)=>{
   const startup = await startups.find()
    res.json(startup)
})

app.listen(port, ()=>{
    console.log('escuchando server en puerto '+ port)
})