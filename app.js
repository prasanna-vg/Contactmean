var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');
var path = require('path');
var bodyparser = require('body-parser');

var app = express();

//portno
const port = 3000;

const dbUrl = 'mongodb+srv://contactUser:CtxPazc2tUmhPfwL@cluster0.on7ev.mongodb.net/ContactApp?retryWrites=true&w=majority';
const ConnectionParams = {
    useNewUrlParser: true, useUnifiedTopology: true
}
//Connect to mongoDB
mongoose.connect(dbUrl,ConnectionParams).then(()=>{
    console.log("connected to Online DB");
}).catch((err)=>{
    console.log(err);
});

//On Connection
// mongoose.connection.on('connected',()=>{
//     console.log("Connected to DB at 27017");
// });
//On Error
mongoose.connection.on('error',(err)=>{
    if(err){
        console.log("Error in DB connection "+err);
    }
});

//cors
app.use(cors());

//bodyparser JSON
app.use(bodyparser.json());

//route
const route = require('./route/routes');
app.use('/api',route)

//testing Server
app.get('/',(req,res)=>{
    res.send('vanako');
});


app.listen(port,()=>{
    console.log("Server started at localhost://3000");
});