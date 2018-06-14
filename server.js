const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const socketServer =require('socket.io')
const AppModel = require('./models/appModel')

const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

var serve = http.createServer(app);
serve.listen(5000,()=> {console.log("Express Server Running!")})
var io = socketServer(serve);

mongoose.connect('mongodb://localhost:27017/local')
var db = mongoose.connection
db.on('error', ()=> {console.log( 'FAILED to connect to mongoose')})
db.once('open', () => {
	console.log( 'Connected to mongoose')
})

const connections = [];
io.on('connection', function (socket) {
	console.log("Connected to Socket!!"+ socket.id)	
	connections.push(socket)
	socket.on('disconnect', function(){
		console.log('Disconnected - '+ socket.id);
	});
});