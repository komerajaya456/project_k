const mymodel = require("../models/usermodel");
const [hashpassword,comparepswd] = require("../help/authpassword")
async function registercontroller(req,res){

    try {

        const {name,email,password,phone,address}=req.body;

        if(!name){
            return res.send({error:'name is Required compulsory'})
        }
        
        if(!email){
            return res.send({error:'email is Required compulsory'})
        }

        
        if(!password){
            return res.send({error:'password is Required compulsory'})
        }

        
        if(!phone){
            return res.send({error:'phone is Required compulsory'})
        }

        
        if(!address){
            return res.send({error:'address is Required compulsory'})
        }
        //if existing user is already present


        const exist_user= await mymodel.findOne({email})
        if (exist_user){
             return res.status(200).send({
                success:true,
                message:'already register please login gow'
            })
        }

        //new resigter 

        const myhashedpswd=await hashpassword(password)

        //save

        const newuser = await new mymodel({name,email,phone,address,password:myhashedpswd}).save()

        res.status(201).send({
            success:true,
            message:"user register 1st time",
            newuser,
        })




    } catch (error) {
        console.log(error);
        res.status(500).send(
            {
                success:false,
                message:"error registeration",
                error
            }
        )
    }



}

module.exports=registercontroller