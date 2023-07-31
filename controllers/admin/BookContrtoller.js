const Bookmowmoadel = require("../../models/booknow")
const nodemailer = require('nodemailer')

class BookController{
    static insertbook = async(req,res)=>{
        try{
            console.log(req.body)
            const{name,email} = req.body
            const r = new Bookmowmoadel({
                name: req.body.name,
                email: req.body.email,
                address: req.body.address,
                mobile: req.body.mobile
            })
            await r.save()
            this.sendEmail(name,email)
            res.redirect('/')
        }catch(error){
            console.log(error)
        }
    }
    static sendEmail = async(name, email)=> {
        //console.log("email sending")
        //console.log("propertyName")
        //console.log(name,email)

        //connect with the smtp server

        let transporter = await nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,

            auth: {
                user: "kanchangangil08@gmail.com",
                pass: "ytwhlazhtlcaqzax",
            },
        });
        let info = await transporter.sendMail({
            from:"test@gmail.com", //sender address
            to: email, //list of receivers
            subject: "Create Property Registration Succesfully", //Subject line
            text: "hello", //plain text body
            html: `<b>${name}</b> Property registration is successfull!`, // html body
        });
        // console.log("Message sent: %s", info.messageId);
    }
}
module.exports=BookController