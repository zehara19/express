const express = require('express')
const {doSomeHeavyTask} = require("./util")
const app = express()
const port = 8080


app.get("/", (req,res)=>{
    return res.json({message:'Hello Zehara Banu'})
})

app.get("/slow",async(req,res)=>{
    try{
        const time = await doSomeHeavyTask();
        return res.json({
            status:'Success',
            message:`Task completed successfully in ${time}ms`
        })
    }catch(error){
        console.log(error)
        return res.status(500)
        .json({
            status:"Error",
            message:"Internal Server Error"
        })
    }
})
app.listen(port, ()=>{
    console.log('server started, port ',port)
})