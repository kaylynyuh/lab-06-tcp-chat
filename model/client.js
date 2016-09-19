'use strict';

const uuid = require('node-uuid');

const client = module.exports = function(socket) {
  this.socket = socket;
  this.nickname = 'user ${Math.random()}';
  this.id = uuid.v4();
};
