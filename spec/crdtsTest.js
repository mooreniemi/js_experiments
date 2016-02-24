require('../boot.js');

// following https://github.com/aphyr/meangirls
// group, g-set, 2p-set, lww-element set, or-set,
// max-change-set, g-counter, pn-counter

var jsc = require('../node_modules/jsverify/lib/jsverify.js');
var CRDT = require('../src/crdts.js'),
    Z = CRDT.Z;

describe("CRDTs", function() {
  describe("integers with addition (Z) are a group", function() {
    it("has zero, succ, add", function() {
      var zero = new Z();
      expect(zero.value).toEqual(0);

      var one = new Z(zero).succ();
      expect(one.value).toEqual(1);

      var two = new Z(one).succ();
      expect(two.value).toEqual(2);

      var sum = one.add(1);
      expect(sum.value).toEqual(2);
    });
  });
  // http://mathworld.wolfram.com/Group.html
  describe("groups respect", function() {
    it("closure", function() {
      var obeyClosure =
        jsc.forall("integer", "integer", function (a, b) {
          // pretty weak :c
          return (new Z(a).add(new Z(b)).hasOwnProperty("value"));
        });
      jsc.assert(obeyClosure);
    });
    it("associativity", function() {
      var obeyAssociativity =
        jsc.forall("integer", "integer", function (a, b) {
          // (a + a) + b == a + (a + b)
          var left = (new Z(a).add(new Z(a))).add(b),
          right = new Z(a).add((new Z(a).add(b)));

          return left.value === right.value;
        });
      jsc.assert(obeyAssociativity);
    });
    it("identity", function() {
      var obeyIdentity =
        jsc.forall("integer", function (a) {
          var z = new Z(a),
          zero = new Z();
          return z.add(zero).value === z.value;
        });
      jsc.assert(obeyIdentity);
    });
    it("inversion (inverse property)", function() {
    });
  });
});
