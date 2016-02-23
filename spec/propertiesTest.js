require('../boot.js');

// http://jsverify.github.io/
var prop = require('../src/properties.js'),
		gates = require('../node_modules/logic-gates/lib/index.js'),
		jsc = require('../node_modules/jsverify/lib/jsverify.js');

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
		it("does obeyCommutativity", function() {
			var obeyCommutativity =
				jsc.forall("nat", "nat", function (a, b) {
					return prop.myBinOp(a, b) === prop.myBinOp(b, a);
				});

			jsc.assert(obeyCommutativity);
		});
		it("does NOT obeyAssociativity", function() {
			var obeyAssociativity =
				jsc.forall("nat", "nat", function (a, b) {
					return prop.myBinOp(prop.myBinOp(a, b), b) === prop.myBinOp(a, prop.myBinOp(a, b));
				});

			expect(function() {
				jsc.assert(obeyAssociativity);
			}).toThrow();

			// alt bind syntax
			expect(jsc.assert.bind(jsc, obeyAssociativity)).toThrow();

			// example of Error format
			// Error: Failed after 1 tests and 8 shrinks.
			// rngState: 0ba3bf754629c1d0e8;
			// Counterexample: []; 0; 1; .
		});
	});
	describe("let's see another one: myBinOp2", function() {
		it("mulitiplies pairwise, then subtracts the sum of the pair", function() {
			var x = 2, y = 3;
			expect(prop.myBinOp2(x, y)).toBe(1);
		});
		it("does obeyCommutativity", function() {
			var obeyCommutativity =
				jsc.forall("nat", "nat", function (a, b) {
					return prop.myBinOp2(a, b) === prop.myBinOp2(b, a);
				});

			jsc.assert(obeyCommutativity);
		});
		it("does NOT obeyAssociativity", function() {
			var obeyAssociativity =
				jsc.forall("nat", "nat", function (a, b) {
					return prop.myBinOp2(a, prop.myBinOp2(a, b)) === prop.myBinOp2(prop.myBinOp2(a, b), b);
				});

			expect(jsc.assert.bind(jsc, obeyAssociativity)).toThrow();
		});
	});

	// https://www.npmjs.com/package/logic-gates
	describe("what about NOR and NAND?", function() {
		it("NOR does obeyCommutativity", function() {
			var obeyCommutativity =
				jsc.forall("bool -> bool -> bool", "bool", "bool", function (a, b) {
					return gates.nor(a, b) === gates.nor(b, a);
				});

			jsc.assert(obeyCommutativity);
		});

		it("NOR does NOT obeyAssociativity", function() {
			var obeyAssociativity =
				jsc.forall("bool -> bool -> bool", "bool", "bool", function (a, b) {
					return gates.nor(a, gates.nor(a, b)) === gates.nor(gates.nor(a, b), b);
				});

			expect(jsc.assert.bind(jsc, obeyAssociativity)).toThrow();
		});
	});
});
