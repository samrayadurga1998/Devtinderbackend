const express=require("express");
const app=express();

app.use("/",(req,res)=>{
    res.send("Hello jere");
})
app.use("/test",(req,res)=>{
    res.send("Hello from servr");
})
app.listen(3000,()=>{
    console.log("server is running");
});