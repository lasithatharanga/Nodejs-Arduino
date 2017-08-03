var awsIot =require('aws-iot-device-sdk');
var SerialPort = require('serialport');
var device = awsIot.device({
  keyPath:'2094307869-private.pem.key',
  certPath:'2094307869-certificate.pem.crt',
  caPath:'rootCA.pem',
  clientId:'pHSensor',
  region:'us-west-2',
  debug: true,
  host: 'a1rcs15rsj2xw4.iot.us-west-2.amazonaws.com'
});

var myPort = new SerialPort('COM4', {
	baudRate: 9600
});

myPort.on('open',onOpen);
myPort.on('data',onData);


var pHState = {"state":{"desired":{
"pH": data,
"timestamp": Date.now()

}}};
	
device.on('connect', function() {
  console.log('connected to aws iot hub');
  //device.subscribe('');
  //device.publish('pHSensorPolicy',JSON.stringify(pHState));
  //console.log('message sent');

});


myPort.on('data' , function(data){
    console.log('data'+data);
    device.publish('pHSensorPolicy',JSON.stringify(pHState));
    console.log("message sent");
});

myPort.on('readable', function(){
	//console.log('data: ', myPort.read());
});


function onOpen(){
	console.log("Open Connection");
 }


function onData(data){
	//console.log('data: '+data);
	//console.log('dataObj');
	// console.log(JSON.stringify(data));
}
