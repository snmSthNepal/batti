var SerialPort = require('serialport')
this.path = new SerialPort('COM3', { autoOpen: false, baudRate: 9600, dataBits: 8, stopBits: 1 });

/*this.port.open(function (err) {

    if (err) {
        alert("Failed to open port.");
    }
    else {

        document.getElementById("COMPortStatus").innerText = "COM3 Is Open"
        Scale.attachPortHandlers();

    }

});*/