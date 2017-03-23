
const express = require('express');
const http = require('http');
const url = require('url');
const WebSocket = require('ws');

const app = express();

app.use(express.static(__dirname + '/'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/js'));
//Store all JS and CSS in Scripts folder.
 
/*app.use(function (req, res) {
  res.send({ msg: "hello" });
});*/

app.get('/',function(req,res){
  res.sendFile('index.html');
  //It will find and locate index.html from View or Scripts
});

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
 //const wss = new WebSocket.Server({ port: 8080 });
 
 wss.on('connection', function connection(ws) {
 	const location = url.parse(ws.upgradeReq.url, true);
 	ws.on('message', function incoming(message) {
 		console.log('received: %s', message);

 		
 		serialPort.write(message);
 		/*serialPort.write('received: %s', message, function(err) {
 			if (err) {
 				return console.log('Error on write: ', err.message);
 			}

 		});*/
 	});	
 });

server.listen(8080, function listening() {
  console.log('Listening on %d', server.address().port);
});
 	var SerialPort = require("serialport");
 	var serialPort = new SerialPort("/dev/ttyACM17", {
 		baudRate: 9600,
 		parser: SerialPort.parsers.readline('\n')
 	});

 	serialPort.on('open', function() {
 		console.log("COM4 Port opened successfully!"); 

 	});

