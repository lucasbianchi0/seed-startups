const Category = require('../models/categorySchema')
const Startups = require('../models/startupSchema')

const homeServices ={
    
    getCategories:async()=>{
        const category=  await Category.find()
        return category


    },
    getStartups:()=>{

    },
    getStartupById:(id)=>{

    }
}


module.exports = homeServices