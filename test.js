var gpio = require("pi-gpio");

var state = parseInt(process.argv[2] , 10) || 0;

gpio.open(22, "output", function(err) {     // Open pin 16 for output
    gpio.write(22, state, function() {          // Set pin 16 high (1)
        gpio.close(22);                     // Close pin 16
    });
});
