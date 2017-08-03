var SerialPort = require('serialport');
var port = new SerialPort('com4', function (err) {
  if (err) {
    return console.log('Error: ', err.message);
  }
});