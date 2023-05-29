const express = require('express')
const connectDB= require('./db/mongodb')
const startups= require('./models/startupSchema')
const categories= require('./models/categorySchema')
const homeRouter = require('./routes/homeRouter')
const app = express()
const port = 4050
connectDB()
app.use('/home/',homeRouter)
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

app.get('/startups/post',async(req,res)=>{
    const newStartups = [
        {
            nombre: 'miubi',
            descripcionCorta:'app de ecommerce de cercania',
            descripcionGeneral:'app de ecommerce de cercania',
            categoria:'Robotica',
        },
        {
            nombre: 'strive',
            descripcionCorta:'app de ecommerce ',
            descripcionGeneral:'app de ecommerce de cercania',
            categoria:'Robotica',
        },
        {
            nombre: 'miubi',
            descripcionCorta:'app de ecommerce de cercania',
            descripcionGeneral:'app de ecommerce de cercania',
            categoria:'Ecommerce',
        },
    ]
    const postSTP = await startups.insertMany(newStartups)
    res.json('hola')
})

app.get('/startups',async(req,res)=>{
    const startup = await startups.find()
     res.json(startup)
 })

app.get('/categories/post',async(req,res)=>{
    const newCategories = [
        {
            title:'Robotica',
            img:'imgRobotica'
        },
        {
            title:'Apps moviles',
            img:'imgmoviles'
        },
        {
            title:'Fintech',
            img:'imgFintech'
        }

      
    ]
    const postCategories = await categories.insertMany(newCategories)
    res.json('nuevas categorias')
})

app.get('/categories',async(req,res)=>{
    const category = await categories.find()
     res.json(category)
 })

 app.get('/categories/delete',async(req,res)=>{
    const category = await categories.deleteMany()
     res.json('borrado')
 })

 app.get('/startups/delete',async(req,res)=>{
    const startup = await startups.deleteMany()
     res.json('borrado')
 })




app.listen(port, ()=>{
    console.log('escuchando server en puerto '+ port)
})