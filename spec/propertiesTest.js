require('../boot.js');

var prop = require('../src/properties.js'),
		jsc = require('../node_modules/jsverify/lib/jsverify.js');

// http://jsverify.github.io/
// http://math.stackexchange.com/questions/160945/does-commutativity-imply-associativity

describe("let's prove a binary operator is commutative but not associative", function() {
	describe("define the operator myBinOp", function() {
		it("multiplies pairwise then adds one", function() {
			var x = 1, y = 2;
			expect(prop.myBinOp(x,y)).toBe(3);
			var a = 2, b = 3;
			expect(prop.myBinOp(a,b)).toBe(7);
		});
	});
	describe("define the property", function() {
		it("obeyCommutativity", function() {
			var obeyCommutativity =
				jsc.forall("nat -> nat -> nat", "nat", "nat", function (f, a, b) {
					return prop.myBinOp(a, b) === prop.myBinOp(b, a);
				});

			jsc.assert(obeyCommutativity);
		});
		it("does NOT obeyAssociativity", function() {
			var obeyAssociativity =
				jsc.forall("nat -> nat -> nat", "nat", "nat", function (f, a, b) {
					return prop.myBinOp(prop.myBinOp(a, b), b) === prop.myBinOp(a, prop.myBinOp(b, a));
				});

			expect(function() {
				jsc.assert(obeyAssociativity);
			}).toThrow();
		});
	});
});
