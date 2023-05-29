const Category = require('../models/categorySchema')
const Startups = require('../models/startupSchema')

const homeServices ={
    
    getCategories:async()=>{
        const categories=  await Category.find()
        return categories
    },

    getStartups:async()=>{
        const startups=  await Startups.find()
        return startups
    },

    getStartupsByCat:async (category)=>{
        const startupsByCat=  await Startups.find({categoria:{$eq:category}})
        return startupsByCat


    },

    getStartupById:async (id)=>{
        const startup=  await Startups.find({_id:{$eq:id}})
        return startup
    },

    postStartupPoste: async (info,id)=>{
        const startup=  await Startups.updateOne(
            {_id:{$eq:id}},
            {$push:{publicaciones:info}})

        return startup
    }
}


module.exports = homeServices