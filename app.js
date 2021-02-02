const express = require('express');
const app = express();
//const port = 3000;
const validUser = "sanam";

var name = process.argv.slice(2);
console.log("Passed argument is: " + name[0]);

var path = "COM3";
var ModbusRTU = require("modbus-serial");
var client = new ModbusRTU();
client.connectRTUBuffered("COM3", { baudRate: 9600 }, false);
client.setID(1);

setInterval(function () {
    client.readHoldingRegisters(0, 10, function (err, data) {
        console.log(data);
    });
}, 1000);


/*function write() {
    client.setID(1);

    // write the values 0, 0xffff to registers starting at address 5
    // on device number 1.
    client.writeRegisters(5, [0, 0xffff])
        .then(read);
}*/

/*function read() {
    // read the 2 registers starting at address 5
    // on device number 1.
        var data = client.readHoldingRegisters(0000, 20)
    console.log(data)
    } */



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