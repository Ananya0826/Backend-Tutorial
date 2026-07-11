const express=require('express')
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//routes create krna
//app.get(route,requestHandler)
//requestHandler->middleware function
app.get('/',function(req,res){
    res.send('hello world')
})
app.get('/profile',function(req,res,next){
    return next(new Error('something went wrong'));
})
app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send('something broke!')
})
//port add krna
app.listen(3000)