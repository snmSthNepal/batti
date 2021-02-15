const express = require('express');
const app = express();

var SerialPort = require("serialport");
var serialport = new SerialPort("/dev/ttyUSB0", { autoOpen: false, baudRate: 9600, stopbits: 1, databits: 8, parity: 'none' }, false);

var ModbusRTU = require("modbus-serial");
var client = new ModbusRTU(serialport);
console.log("Port Open Status: " + client.isOpen);
client.open();
console.log("Port Open Status: " + client.isOpen);

var x = setInterval(function () {
    if (client.isOpen) {
        console.log("Port Open Status: " + client.isOpen);
        client.setID(1);
        console.log("WORKING WORKING");
        try {
          var data = client.readHoldingRegisters(0, 7);
          var s = data.then(function(result) {
            console.log("resultt ", result)
          // return result;
        });

        } catch (err) {
            console.log("Error Encountered: " + err)
        }
    } else {
        console.log("ERROR ERROR ERROR");
        }
}, 1000);
//client.close();
//process.exit();
