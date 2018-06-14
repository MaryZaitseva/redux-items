const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const socketServer =require('socket.io')

const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

var serve = http.createServer(app);
serve.listen(5000,()=> {console.log("Express Server Running!")})

mongoose.connect('mongodb://localhost:27017/local')
var db = mongoose.connection
db.on('error', ()=> {console.log( 'FAILED to connect to mongoose')})
db.once('open', () => {
	console.log( 'Connected to mongoose')
})