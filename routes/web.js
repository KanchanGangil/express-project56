const express =  require('express')
const FrontController = require('../controllers/FrontController')
const AdminController = require('../controllers/admin/AdminController')
const PropertyController = require('../controllers/admin/PropertyController')
const CategoryController = require('../controllers/admin/CategoryController')
const AboutController = require('../controllers/admin/AboutController')
const ContactController = require('../controllers/admin/ContactController')
const route= express.Router()
const checklogin = require('../middleware/auth')
const SliderController = require('../controllers/admin/SliderController')
const BookController = require('../controllers/admin/BookContrtoller')


//FrontController route
route.get('/',FrontController.home)
route.get('/about',FrontController.about)
route.get('/contact',FrontController.contact)
route.get('/property',FrontController.property)
route.get('/propertylist/:name',FrontController.propertylist)
route.get('/details/:id',FrontController.propertydetails)
route.get('/login',FrontController.login)

//Adminpart
route.get('/admin/dashboard',checklogin,AdminController.dashboard) 
route.get('/register',AdminController.register)
route.post('/admininsert',AdminController.admininsert)
route.post('/verifylogin',AdminController.verifylogin)
route.get('/logout',AdminController.logout)

//admin //PropertyController
route.get('/admin/addproperty',checklogin,PropertyController.addproperty)
route.post('/admin/insertproperty',checklogin,PropertyController.insertproperty)
route.get('/admin/propertyView/:id',checklogin,PropertyController.viewproperty)
route.get('/admin/propertyEdit/:id',checklogin,PropertyController.editproperty)
route.post('/admin/updateproperty/:id',checklogin,PropertyController.updateproperty)
route.get('/admin/propertydelete/:id',checklogin,PropertyController.deleteproperty)


// //admin /CategoryController
 route.get('/admin/addcategory',checklogin,CategoryController.addcategory)
 route.post('/admin/insertcategory',checklogin,CategoryController.insertcategory)
 route.get('/admin/categoryView/:id',checklogin,CategoryController.viewcategory)
 route.get('/admin/categoryEdit/:id',checklogin,CategoryController.editcategory)
 route.post('/admin/updatecategory/:id',checklogin,CategoryController.updatecategory)
 route.get('/admin/categoryDelete/:id',checklogin,CategoryController.deletecategory)

//admin/AboutController
route.get('/admin/addabout',checklogin,AboutController.addabout)
route.post('/admin/insertabout',checklogin,AboutController.insertabout)
route.get('/admin/aboutview/:id',checklogin,AboutController.aboutview)
route.get('/admin/aboutedit/:id',checklogin,AboutController.aboutedit)
route.post('/admin/updateedit/:id',checklogin,AboutController.updateedit)
route.get('/admin/aboutdelete/:id',checklogin,AboutController.aboutdelete )

//admin/ContactController
route.get('/admin/addcontact',checklogin,ContactController.addcontact)
route.post('/admin/insertcontact',checklogin,ContactController.insertcontact)
route.get('/admin/contactview/:id',checklogin,ContactController.viewcontact)
route.get('/admin/editcontact/:id',checklogin,ContactController.editcontact)
route.post('/admin/updatecontact/:id',checklogin,ContactController.updatecontact)
route.get('/admin/deletecontact/:id',checklogin,ContactController.deletecontact)

//admin/SliderController
route.get('/admin/addslider',checklogin,SliderController.addslider)
route.post('/admin/insertslider',checklogin,SliderController.sliderinsert)
route.get('/admin/sliderView/:id',checklogin,SliderController.viewslider)
route.get('/admin/sliderEdit/:id',checklogin,SliderController.editslider)
route.post('/admin/updateslider/:id',checklogin,SliderController.updateslider)
                            
// Book Controller
route.post('/bookinsert',BookController.insertbook)


module.exports= route    