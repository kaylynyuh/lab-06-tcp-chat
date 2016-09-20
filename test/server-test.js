'use strict';

const server = require('../server.js');
const assert = require('assert');

// describe('testing server module', function() {
//   describe('\\nick should change a clients username', function(){
//     it('should output a valid username', function(){
//       var username = '\\nick kaylyn';
//       expect(username).to.be.a('string');
//     });
//   });
// });


describe('testing server module', function() {
  describe('\\nick should change a clients username', function(){
    it('should output a valid username', function(){
      assert.equal('\\nick kaylyn', 'expected \\nick kaylyn');
    });
  });
});
