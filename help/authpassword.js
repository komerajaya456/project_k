const bcrypt=require("bcrypt")

async function hashpassword(pswd){
    try {

        const saltround=10;
        const hashedpswd=await bcrypt.hash(pswd,saltround)
        return hashedpswd
        
    } catch (error) {
        console.log(`this error in password bcrypt ${error}`)
    }
}




async function comparepswd(pswd,hashedpswd){
    const myresult=bcrypt.compare(pswd,hashedpswd);
    return myresult;
}


module.exports=[hashpassword,comparepswd];
