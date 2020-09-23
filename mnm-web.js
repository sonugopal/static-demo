const express=require('express')

const app=express()
var path = require('path');
const port=4000
app.use(express.static('build'));
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
})


app.listen(port,()=>{
    console.log("MnM Website running on port ",port)
})