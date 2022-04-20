const express = require("express");
const app  = express();
const posts=require("./posts")
const rateLimit  =require('express-rate-limit')

const  limiter =rateLimit({
   max:2,
   windowMs:10000
});



app.get("/posts",limiter,(req,res)=>{
    res.send("true love ")
})
app.listen(5000,()=>{

    console.log("Listening Port 3000")
})