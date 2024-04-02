const mongoose=require("mongoose")
const uri = "mongodb+srv://komerajaya7259:eihlGz2XfQOM3FoJ@secondcluster.vzmnsfg.mongodb.net/mohit?retryWrites=true&w=majority"

async function connectDB(){
    try {
   
        const conn= await mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true })
        console.log(`connected to mongo db ${conn.connection.host}`)
    } catch (error) {
        console.log(`my error gow ${error}`)
    }
}

module.exports= connectDB;