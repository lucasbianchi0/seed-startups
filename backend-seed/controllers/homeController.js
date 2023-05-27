const homeServices = require("../services/homeServices")


const HomeController ={
    getCategoriesPage: async(req,res)=>{ 
        const categories = await homeServices.getCategories()
        console.log('holaa')
        res.json(categories) 

    },
    getStartupsPage: (req,res)=>{
        const startups = homeServices.getStartups()
    },
    getStartupPageById: (req,res)=>{
        const {id}= req.params
        const startup = homeServices.getStartupById(id)
    },
    // postStartupPost: (req,res)=>{
       
    // },
    // postContactForm: (req,res)=>{

    // }
}


module.exports = HomeController