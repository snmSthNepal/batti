const express = require('express');
const app = express();


var ModbusRTU = require("custombus");
const SerialPort = require('serialport');
var path = new SerialPort("COM3");
var client = new ModbusRTU();
client.connectRTUBuffered("COM3", { autoOpen: false, baudRate: 9600, stopbits: 1, databits: 8, parity: 'none' }, false);
client.setID(1);
client.setTimeout(500)

setInterval(function () {
    try {
        client.readHoldingRegisters(0, 10, function (err, data) {
            console.log(data);
        });
    } catch (err) {
        console.log("Error Encountered: " + err)
    }
    
}, 1000);

//process.exit();

/*function read() {

    try {
        var data = client.readHoldingRegisters(0, 20);
        console.log(data);
    } catch (err) {
        console.log("Error Encountered: " + err)
    }
}*/



/*function write() {
    client.setID(1);

    // write the values 0, 0xffff to registers starting at address 5
    // on device number 1.
    client.writeRegisters(5, [0, 0xffff])
        .then(read);
}*/




/*const SerialPort = require("serialport");
var path = "COM3";
//var serialport = new SerialPort(path);

var portObj = new SerialPort(path, {baudRate: 9600}, true);


    portObj.open(function (error) {
        if (error) {
            console.log("Error Encountered: " + error);
        } else {
            console.log("Working Module");
        }
    })*/








/*app.listen(port, () => {
    console.log("Server running at port: " + port)
})*/

/*app.get('/', (req, res) => {
    res.send("Hellow World")
})*/


/*const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Who are you?', name => {
    console.log(`Hey there ${name}!`);
    readline.close();
});*/

/*const prompt = require('prompt-sync')();

const name = prompt('What is your name?');
console.log(`Hey there ${name}`);*/