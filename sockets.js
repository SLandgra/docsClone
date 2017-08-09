var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
// var room = io.sockets.adapter.rooms['doc'];
var clients = [];
io.on('connection', function(socket){
  console.log('Connected to the socket boiiii or guuuuuuuurl we are in 2017 so I should not assume yo gender yo');
  socket.on('connect', function(clientID) {
    socket.user = clientID;
    clients.push(clientID);
  });

  if(clients.length>=6){
    for(var i = 0; i<clients.length; i++) {
      if(clients[i] === socket.user) {
        clients.splice(1, i);
      }
    }
    socket.emit('roomfull','Room is Full');
  }else{
    socket.on('documentChange', function(docChange){
      io.emit('documentEdit', docChange);
    });

    socket.on('cursorClick', function(position){
      io.broadcast('cursorPosition', position);
    });

    socket.on('highlight', function(highlight){
      io.broadcast('highlighter', highlight);
    });
  }

  const port = 3000;
  io.listen(port);
  console.log('listening on port ', port);
});
