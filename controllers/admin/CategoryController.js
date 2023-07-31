const CategoryModel = require('../../models/Category');
const cloudinary =require('cloudinary').v2;
cloudinary.config({ 
    cloud_name: 'dax7jurba', 
    api_key: '879468916817865', 
    api_secret: 'lOPE_ryneU8HXV40qbPNj-wqxl0' 
  });

class CategoryController{
    static addcategory = async(req,res)=>{
        try{
            const{name,image}=req.data1
           const data = await CategoryModel.find()
          //console.log(data);
        res.render('admin/category/addcategory',{d:data, n:name,img:image}) 
        }catch(error){
            console.log(error);
        }
    }

    static insertcategory = async(req,res)=>{
        try{
            const imagefile = req.files.image
            //image upload code
            const image_upload = await cloudinary.uploader.upload(imagefile.tempFilePath,{
                folder:"categoryImage"
            })

            const result = new CategoryModel({
                name:req.body.name,
                image:{
                    public_id: image_upload.public_id,
                    url:image_upload.secure_url
                }

            })
            await result.save()
            res.redirect('/admin/addcategory') 
        }catch(error){
            console.log(error);
        }
    }
    static viewcategory= async(req,res)=>{
        try{
            //console.log(req.params.id);
            const{name,image}=req.data1
            const data = await CategoryModel.findById(req.params.id)
            //console.log(data);
            res.render('admin/category/view',{d:data ,n:name,img:image});
        }catch(error){
            console.log(error);
        }
    }
    static editcategory = async(req,res)=>{
        try{
            const{name,image}=req.data1
            const data = await CategoryModel.findById(req.params.id)
            res.render('admin/category/edit',{d:data,n:name,img:image})
        }catch(error){
            console.log(error);
        }
    }
    static updatecategory = async(req,res)=>{
        try{
            if (req.files){
                const category = await CategoryModel.findById(req.params.id)
                const imageid = category.image.public_id
                //console.log(imageid)
                //image delete
                await cloudinary.uploader.destroy(imageid)
                //second update image
                const imagefile = req.files.image
                // image upload code
                const image_upload = await cloudinary.uploader.upload(imagefile.tempFilePath,{
                    folder:"categoryImages"
                })
                var data= {
                    name:req.body.name,
                    image:{
                        public_id: image_upload.public_id,
                        url:image_upload.secure_url
                    }
                }
            }else{
                var data ={
                    name:req.body.name,
                }
            }
            //console.log(req.files.image)
            const id = req.params.id
            await CategoryModel.findByIdAndUpdate(id,data)
            res.redirect('/admin/addcategory')

        }catch(error){
            console.log(error);
        }
    }
    static deletecategory = async(req,res)=>{
        try{
            const category = await CategoryModel.findById(req.params.id)
            const imageid = category.image.public_id
            //image delete
            await cloudinary.uploader.destroy(imageid)
            const data = await CategoryModel. findByIdAndDelete(req.params.id)
            res.redirect('/admin/addcategory')

        }catch(error){
            console.log(error);
        }
    }
}


module.exports=CategoryController


