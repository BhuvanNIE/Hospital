const express = require("express");
const {handleDoctorDetails, handleDoctorInfo, handleGetPatient} = require("../controllers/doctor");
const router = express.Router();

router.post("/info",handleDoctorDetails);
router.get("/",handleDoctorInfo);
router.get("/patient",handleGetPatient);



module.exports=router;