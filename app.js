var SerialPort = require('serialport');
<<<<<<< HEAD
var myPort = new SerialPort('COM4', {
  baudRate: 9600
});

myPort.on('open',onOpen);
myPort.on('data',onData);


myPort.on('data', function(data){
//console.log('data: ','data: ', myPort.read());
})


function onOpen(){
=======
var myPort = new SerialPort('COM4', function (err) {
  if (err) {
    return console.log('Error: ', err.message);
  }
});
// var serialport=require("serialport");
// var SerialPort =serialport.SerialPort;
// var portName = process.argv[2];
 console.log(SerialPort);
// var myPort = new SerialPort(portName);
//
myPort.on('open',onOpen);
myPort.on('data',onData);
//
 function onOpen(){
>>>>>>> 263076135f74d2f5904152de420ce4db53d23c07
  console.log("Open Connection");
 }


 function onData(data){
	 
console.log('data',+data);
 

//console.log('dataObj');
// console.log(JSON.stringify(data));
}

