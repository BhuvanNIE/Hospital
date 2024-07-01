const express = require("express");

const route = express.Router();
route.get("/",(req,res)=>{
    res.render("home");
})
route.get("/entryp",(req,res)=>{
    res.render("patients");
})
route.get("/entryd",(req,res)=>{
    res.render("doctors");
})
route.get("/signup",(req,res)=>{
    res.render("signup");
})
route.get("/login",(req,res)=>{
    res.render("login");
})
route.get("/hospital",(req,res)=>{
    res.render("entry");
})
route.get("/pinfo",(req,res)=>{
    res.render("patientInfo");
})
route.get("/dinfo",(req,res)=>{
    res.render("doctorInfo");
})
route.get("/dpinfo",(req,res)=>{
    return res.render("dp");
})


module.exports=route;