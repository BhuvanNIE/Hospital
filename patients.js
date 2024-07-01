const Patient = require("../models/patient");
const Doctor = require("../models/doctor");

async function handlePatientDetails(req,res){
    const body = req.body;
    if(!body) return res.json({msg:"Body not available"});
    await Patient.create({
        firstName:body.firstName,
        lastName:body.lastName,
        age:body.age,
        disease:body.disease,
        doctor:body.doctor,
    })

    return res.render("patients",{
        name:body.firstName
    });
}

async function handlePatientInfo(req,res){
    const patientDetail = await Patient.findById(req.query.id);
    return res.send(patientDetail);
}

async function handleDoctorDisease(req,res){
    const job = req.params.jobTitle;
    const allDoctors = await Doctor.find({jobTitle:job});
    return res.json(allDoctors);
}

module.exports ={
    handlePatientDetails,
    handlePatientInfo,
    handleDoctorDisease,
}