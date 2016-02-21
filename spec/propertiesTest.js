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
		it("obeysCommutativity", function() {
			// forall (f : bool -> bool) (b : bool), f (f (f b)) = f(b).
			var obeysCommutativity =
				jsc.forall("nat -> nat -> nat", "nat", "nat", function (f, a, b) {
					return f(a, b) === f(b, a);
				});

			jsc.assert(obeysCommutativity);
		});
	});
});
