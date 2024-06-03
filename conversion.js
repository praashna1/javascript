// console.log("hii");
// const { log } = require('console');
require('dotenv').config()
const express=require('express')
const app=express()
const port=4000

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.get('/twitter',(req,res)=>{
    res.send('twittercom')
})
app.get('/login',(req,res)=>{
    res.send("<h2>ohh hii there</h2>")
})
app.listen(PORT,()=>{
    console.log('example appp listening on port ${port}')
})

