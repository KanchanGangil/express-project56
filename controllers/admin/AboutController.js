const AboutModel = require("../../models/About")
const cloudinary =require('cloudinary').v2;
cloudinary.config({ 
    cloud_name: 'dax7jurba', 
    api_key: '879468916817865', 
    api_secret: 'lOPE_ryneU8HXV40qbPNj-wqxl0' 
  });
  
  
class AboutController {
    
    static addabout = async (req,res)=>{
        try{
        //console.log(req.body)
        const{name,image}=req.data1
        const data = await AboutModel.find()
        //console.log(data);
        res.render('admin/about/addabout',{d:data,n:name,img:image})
        }catch(error){
            console.log(error);
        }
    }
    static insertabout = async (req,res) =>{
        try{
            const result  = new AboutModel({
            name:req.body.name
             })
             await result.save()
             res.redirect('/admin/addabout')
        }catch(error ){
            console.log(error);
        }
    }
    static aboutview = async (req,res)=>{ 
        try{
            const{name,image}=req.data1
            const data = await AboutModel.findById (req.params.id)
           // console.log(data)
            res.render('admin/about/view',{d:data,n:name,img:image});
        }catch(error){
            console.log(error);
        }
    }
    static aboutedit = async (req,res) =>{
        try{
            const{name,image}=req.data1
            const data = await AboutModel.findById(req.params.id)
            res.render('admin/about/edit',{d:data,n:name,img:image});
        }catch(err){
            console.log(err);
        }
    }
    static updateedit = async (req,res) =>{
        try{
            const id  = req.params.id
            const data = await AboutModel.findByIdAndUpdate(id,{
                name:req.body.name
            })
            res.redirect('/admin/addabout')
        }catch(err){
            console.log(err);
        }
    }
    static aboutdelete = async (req,res)=>{
        try{
            const data = await AboutModel.findByIdAndDelete(req.params.id)
            res.redirect('/admin/addabout')
        }catch(error){
            console.log(error);
        }
    }
}


module.exports=AboutController