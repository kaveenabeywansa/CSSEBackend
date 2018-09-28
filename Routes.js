const express=require('express');
var Routes=express.Router();
var User = require('./Controller/UserRoute');

Routes.use('/user/',User);

module.exports = Routes;