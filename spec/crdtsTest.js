require('../boot.js');

var CRDT = require('../src/crdts.js'),
  Z = CRDT.Z;

describe("CRDTs", function() {
  describe("integers (Z) are a group", function() {
    it("has zero, succ, add", function() {
      var zero = new Z().zero();
      expect(zero).toEqual(0);

      var one = new Z(zero).succ();
      expect(one).toEqual(1);
    });
  });
  // http://mathworld.wolfram.com/Group.html
  describe("groups respect", function() {
    it("closure", function() {
    });
    it("associativity", function() {
    });
    it("identity", function() {
    });
    it("inversion (inverse property)", function() {
    });
  });
});
