const express=require("express")
const colors=require("colors")
const dotenv=require("dotenv")
const morgan=require("morgan")
const connectDB=require("./config/mongodb")
const router=require('./routes/authroute')


const app=express()


dotenv.config()

app.use(express.json())
app.use(morgan('dev'))
connectDB();




//all routes from here
app.use('/api/gow/auth',router)



app.get('/',(req,res)=>{
    res.send("<h1>hello<h1/>")
})

const PORT=process.env.PORT || 8080

app.listen(PORT,()=>{
    console.log("running on ".bgCyan.white)
})