var SerialPort = require('serialport');
var myPort = new SerialPort('COM4', {
	baudRate: 9600
});

myPort.on('open',onOpen);
//myPort.on('data',onData);


myPort.on('data' , function(data){
	console.log('data'+data);
	
});

myPort.on('readable', function(){
	//console.log('data: ', myPort.read());
});


function onOpen(){
	console.log("Open Connection");
 }

myPort.on('error', function(err) {
  console.log('Error: ', err.message);
});

//function onData(data){
	//console.log('data: '+data);
	//console.log('dataObj');
	// console.log(JSON.stringify(data));
//}

