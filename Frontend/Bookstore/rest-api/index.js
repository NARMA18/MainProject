let express = require('express'),
path = require('path'),
mongoose = require('mongoose'),
cors = require('cors'),
bodyParser = require('body-paraser'),
mongoDb =  require('./database/db');
mongoose.Promise = global.Promise;
mongoose.connect(mongoDb.bookstore ,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("DtataBase Connected successfull !!")
},
error=>{
    console.log("Data base Error:" + error)
})