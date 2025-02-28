const express= require('express');
const app=express()
const port=3000
const item=require('./route/item');
//loading middleware into app (inbuild middleware)
//this one converted json to js object
app.use(express.json());
app.use('/api',item);

//APPLICATION LAVEL MIDDLEWARE

const loggingMiddleware= (req,res,next)=>{
    console.log("logging middleware");
    next();
}

const authMiddleware=(req,res,next)=>{
    console.log("Auth middleware");
    next();
}

const validationMiddleware=(req,res,next)=>{
    console.log("validation middleware");
    next();
}
app.use(loggingMiddleware);
app.use(authMiddleware);
app.use(validationMiddleware);

app.get('/',(req,res)=>{
    console.log("reqq=",req.body);
    res.send("Hello world")
})

app.listen(port,()=>{
    console.log(`app is listening on post ${port}`)
})