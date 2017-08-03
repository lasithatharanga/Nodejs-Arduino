var SerialPort = require('serialport');
var myPort = new SerialPort('COM4', {
  baudRate: 9600
});

myPort.on('open',onOpen);
myPort.on('data',onData);


myPort.on('data', function(data){
//console.log('data: ','data: ', myPort.read());
})


function onOpen(){
  console.log("Open Connection");
}


 function onData(data){
	 
console.log('data',+data);
 

//console.log('dataObj');
// console.log(JSON.stringify(data));
}

