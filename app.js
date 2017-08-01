var SerialPort = require('serialport');
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
  console.log("Open Connection");
 }

function onData(data){
  console.log(data);
}
