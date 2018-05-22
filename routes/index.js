var express = require('express');
var router = express.Router();
var morgan = require("morgan");

router.use("/", logInfo);

function logInfo (req, res, next){
	morgan("tiny")
};



