var PusherClient, pres, pusher_client; 
var gpio = require("pi-gpio");
PusherClient = require('pusher-node-client').PusherClient;

var config =  {
  appId: '69516',
  key: '8ef39383668f7524bd31',
  secret: '59df92a183ff4ddbe546'
}

pusher_client = new PusherClient(config); 

pusher_client.on('connect', function() {
  socket = pusher_client.subscribe('my-channel', { });
  socket.on('success', function() {
    socket.on("my_event", function(data) {
      console.log(data);
      var state = !data.power;
      var gpio = require("pi-gpio"); 

      gpio.open(22, "output", function(err) {     // Open pin 16 for output
          gpio.write(22, state, function() {          // Set pin 16 high (1)
              gpio.close(22);                     // Close pin 16
          });
      });
    });
  });
}); 
pusher_client.connect();
