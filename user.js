const express = require("express");
const {handleUserSignUp, handleUserLogin} = require("../controllers/user");

const route = express.Router();

route.post('/signup/info',handleUserSignUp);
route.post('/login/info',handleUserLogin);

module.exports=route;