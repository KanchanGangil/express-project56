const Propertymodel = require ('../models/Property')
const CategoryModel = require('../models/Category')

class FrontController{

static home= async(req,res)=>{
    try{
        const property = await Propertymodel.find()
        const category = await CategoryModel.find()
        //console.log(property)
        res.render('home',{p:property,c:category})
    }catch(err){
        console.log(err)
    }
}
static about= async(req,res)=>{
    try{
        res.render('about')
    }catch(err){
        console.log(err)
    }
}

static contact= async(req,res)=>{
    try{
        res.render('contact')
    }catch(err){
        console.log(err)
    }
}

static property= async(req,res)=>{
    try{
        res.render('property')
    }catch(err){
        console.log(err)
    }
}

static propertylist = async(req,res)=>{
    try{
        const name = req.params.name
        //console.log(name)
        const propertylist = await Propertymodel.find({category:name})
        //console.log(propertylist)
        res.render('propertylist',{p:propertylist})
    }catch(error){
        console.log(error);
    }
    }

    static propertydetails =async(req,res)=>{
        try {
            const id = req.params.id
            //console.log(name)
            const propertydetails = await Propertymodel.findById(id)
            console.log(propertydetails)
            res.render('details',{pd:propertydetails})
    }catch(error){
        console.log(error);
    }
    }

static login= async(req,res)=>{
    try{
        res.render('login',{message1:req.flash('success'),message2:req.flash('error')})
    }catch(err){
        console.log(err)
    }
}
}


module.exports=FrontController