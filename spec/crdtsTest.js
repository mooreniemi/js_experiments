require('../boot.js');

// following https://github.com/aphyr/meangirls
// group, g-set, 2p-set, lww-element set, or-set,
// max-change-set, g-counter, pn-counter

var  jsc = require('../node_modules/jsverify/lib/jsverify.js');
var CRDT = require('../src/crdts.js'),
  Z = CRDT.Z;

  describe("CRDTs", function() {
    describe("integers with addition (Z) are a group", function() {
      it("has zero, succ, add", function() {
        var zero = new Z().zero();
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
      });
      it("associativity", function() {
        var obeyAssociativity =
          jsc.forall("nat", "nat", function (a, b) {
            // (a + a) + b == a + (a + b)
            console.log("a: " + a + " b: " + b);
            return (new Z(a).add(new Z(a))).add(b) == new Z(a).add((new Z(a).add(b)));
          });

          jsc.assert(obeyAssociativity);
      });
      it("identity", function() {
      });
      it("inversion (inverse property)", function() {
      });
    });
  });
