var assert = require('assert');

var MOKU = require('../app/assets/js/bundle/moku');

describe('Array', function() {
  describe('#method()', function() {
    it('should return true is function', function() {
      assert.equal(true, function() {});
    });
  });
});