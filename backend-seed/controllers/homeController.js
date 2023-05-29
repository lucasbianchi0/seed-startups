const homeServices = require("../services/homeServices")


const HomeController ={
    getCategoriesPage: async(req,res)=>{ 
        const categories = await homeServices.getCategories()
        res.json(categories) 

    },
    getStartupsPage: async(req,res)=>{
        const startups = await homeServices.getStartups()
        res.json(startups)
    },
    getStartupPageById: async(req,res)=>{
        // const {id}= req.params
        const id = '6474e6035402b1ec0effc1a4'
        const startup = await homeServices.getStartupById(id)
        res.json(startup)
    },
    getStartupPageByCat: async(req,res)=>{
        // const {id}= req.params
        const category = 'Robotica'
        const startupByCat = await homeServices.getStartupsByCat(category)
        res.json(startupByCat)
    },
    postStartupPost: async (req,res)=>{
        // const {id}= req.params
        const info = {
            descripcionPublicacion:'nueva Publi'
        }
        const id = '6474e6035402b1ec0effc1a4'
        const startup = await homeServices.postStartupPoste(info,id)
        

       res.json('creada')
    },
    // postContactForm: (req,res)=>{

    // }
}


module.exports = HomeController