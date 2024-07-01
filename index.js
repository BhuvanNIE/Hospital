const express = require("express");
const patientRoute = require("./routes/patient");
const doctorRoute = require("./routes/doctor");
const mongoose = require("mongoose");
const path = require("path");
const staticRoute = require("./routes/staticRouter");
const userRoute = require("./routes/user");

mongoose
.connect("mongodb://127.0.0.1:27017/hospital-app")
.then(()=>console.log("Database connected"))
.catch((err)=>console.log("Error:",err));

const app = express();
const port = 8000;
//engine
app.set("view engine","ejs");
app.set("views",path.resolve('./views'));

//middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use("/patient",patientRoute);
app.use("/doctor",doctorRoute);
app.use("/",staticRoute);
app.use("/user",userRoute);




app.listen(port,()=>console.log(`server started at ${port}`));