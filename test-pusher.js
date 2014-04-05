//var Pusher = require('pusher'); 
//var pusher = new Pusher({
//  appId: '69516',
//  key: '8ef39383668f7524bd31',
//  secret: '59df92a183ff4ddbe546'
//});
//
////pusher.trigger('test_channel', 'my_event', {
////  "message": "hello world"
////});
//
//
//var channel = pusher.subscribe('public-channel');
//
//channel.bind('my-event', function(data){
//  console.log(data);
//});


//var Pusher = require('pusher-client');
//var socket = new Pusher('8ef39383668f7524bd31');
//console.log(socket)
//var my_channel = socket.subscribe('test_channel');
//my_channel.bind('my_event',
//  function(data) {
//    console.log(arguments)
//    // add comment into page
//  }
//);

var PusherClient, pres, pusher_client;

PusherClient = require('pusher-node-client').PusherClient;

//  appId: '69516',
//  key: '8ef39383668f7524bd31',
//  secret: '59df92a183ff4ddbe546'
pusher_client = new PusherClient({
  appId: process.env.PUSHER_APP_ID || 69516,
  key: process.env.PUSHER_KEY || '8ef39383668f7524bd31',
  secret: process.env.PUSHER_SECRET || '59df92a183ff4ddbe546'
});

pres = null;

pusher_client.on('connect', function() {
  //pres = pusher_client.subscribe("presence-users", {
  //  user_id: "system"
  //});
  //return pres.on('success', function() {
  //  pres.on('pusher_internal:member_removed', function(data) {
  //    return console.log("member_removed");
  //  });
  //  return pres.on('pusher_internal:member_added', function(data) {
  //    return console.log("member_added");
  //  });
  //});
  socket = pusher_client.subscribe('my-channel', { });
  socket.on('success', function() {
    console.log("ON SUCCESS");
    socket.on("my_event", function(data) {
      console.log("MESSAGE", data);
    });
  });
});

pusher_client.connect();
