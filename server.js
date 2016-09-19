'use strict';

const net = require('net');
const EE = require('events');
const Client = require('./model/client.js');
const PORT = process.env.PORT || 3000;

const pool = [];
const server = net.createServer();
const ee = new EE();


ee.on('\\nick', function(client, string){
  client.nickname = string.trim();
});

ee.on('\\all', function(client, string){
  pool.forEach(cli => {
    cli.socket.write(`${client.nickname}:` + string);
  });
});

ee.on('\\dm', function(client, string) {
  var nickname, message;
  nickname = string.split(' ').shift();
  message = string.split(' ').slice(1).join('');
  pool.forEach(cli => {
    if(cli.nickname == nickname) {
      client.socket.write('Message sent to ' + cli.nickname);
      cli.socket.write(`${client.nickname}: ` + message);
    }
  });
});

ee.on('default', function(client, string){
  client.socket.write('this is not a command');
});

//module logic
server.on('connection', function(socket){
  var client = new Client(socket);
  pool.push(client);
  socket.on('data', function(data){
    const command = data.toString().split(' ').shift().trim();
    const message = data.toString().split(' ');

    if(command.startsWith('\\')){
      ee.emit(command, client, data.toString().split(' ').slice(1).join(' '));
      return;
    }
    ee.emit('default', client, data.toString());
  });
});

server.listen(PORT, function(){
  console.log('running on port', PORT);
});
