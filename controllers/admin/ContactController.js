const ContactModel = require("../../models/Contact");
const Contactmodel = require("../../models/Contact");

class ContactController{
    static addcontact = async(req,res)=>{
        try{
            const{name,image}=req.data1
            const data = await Contactmodel.find()
            res.render('admin/contact/addcontact',{d:data,n:name,img:image})
        }catch(error){
            console.log(error);
        }
    }
    static insertcontact = async(req,res)=>{
        try{
            const result = new Contactmodel({
                name:req.body.name
            })
            await result.save()
            res.redirect('/admin/addcontact')
        }
        catch(error){
            console.log(error);
        }
    }
    static viewcontact = async(req,res)=>{
        try{
            // console.log(req.params.id);
            const{name,image}=req.data1
            const data = await Contactmodel.findById(req.params.id)
            res.render('admin/contact/view',{d:data,n:name,img:image})
            // console.log(data);

        }catch(error){
            console.log(error);
        }
        
    }
    static editcontact = async (req,res)=>{
        try{
            const{name,image}=req.data1
            const data  = await Contactmodel.findById(req.params.id)
            res.render('admin/contact/edit',{d:data,n:name,img:image})
        }catch(error){
            console.log(error);
        }
    }
static updatecontact = async (req,res)=>{
    try{
        const id = req.params.id
        const data = await Contactmodel.findByIdAndUpdate(id,{
            name:req.body.name,
        })
        res.redirect('/admin/addcontact')
    }catch(error){
        console.log(error);
    }
}  
static deletecontact = async(req,res)=>{
    try{
        const data = await ContactModel.findByIdAndDelete(req.params.id)
        res.redirect('/admin/addcontact')
    }catch(error){
        console.log(error);
    }
}  

}
module.exports=ContactController