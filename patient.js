const express = require("express");
const {handlePatientDetails, handlePatientInfo,
     handleDoctorDisease} = require("../controllers/patients");
const router = express.Router();

router.post("/info",handlePatientDetails);
router.get("/",handlePatientInfo);
router.get("/doctor/:jobTitle",handleDoctorDisease);

module.exports=router;
