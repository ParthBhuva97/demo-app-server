import express from "express"
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.get("/getmsg",(req,res)=>{
    console.log("Requested");
    res.send("Hello World")
})

app.listen(5000,()=>{
    console.log("Server Listening");
})