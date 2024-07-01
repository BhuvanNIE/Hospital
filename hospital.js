const mongoose = require("mongoose");

const hospitalSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true});

const Hospital = mongoose.model("hospitals",hospitalSchema);