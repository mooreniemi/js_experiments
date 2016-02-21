require('../boot.js');

var prop = require('../src/properties.js');

// http://jsverify.github.io/
// http://math.stackexchange.com/questions/160945/does-commutativity-imply-associativity

describe("let's prove a binary operator is commutative but not associative", function() {
    describe("define the operator myBinOp", function() {
        it("multiplies pairwise then adds one", function() {
            var x = 1, y = 2;
            expect(prop.myBinOp(x,y)).toBe(3);
        });
        it("multiplies pairwise then adds one", function() {
            var x = 2, y = 3;
            expect(prop.myBinOp(x,y)).toBe(7);
        });
    });
});
