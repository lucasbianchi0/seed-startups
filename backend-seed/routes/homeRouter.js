const express = require('express')
const homeRouter = express.Router()
const HomeController = require('../controllers/homeController')

homeRouter.get('/categories', HomeController.getCategoriesPage)
homeRouter.get('/startups', HomeController.getStartupsPage)
homeRouter.get('/perfil/:id', HomeController.getStartupPageById)
// homeRouter.post('/perfil/:id/publicacion', HomeController.postStartupPost)
// homeRouter.post('/contacto', HomeController.postContactForm)
homeRouter.get('/startupbycat', HomeController.getStartupPageByCat)
homeRouter.post('/newpost', HomeController.postStartupPost)






module.exports= homeRouter