// http://math.stackexchange.com/questions/160945/does-commutativity-imply-associativity
function myBinOp(x, y) {
  return (x * y) + 1;
}

// http://math.stackexchange.com/questions/327422/are-all-algebraic-commutative-operations-always-associative
function myBinOp2(a, b) {
	return (a * b) - (a + b);
}

module.exports.myBinOp = myBinOp;
module.exports.myBinOp2 = myBinOp2;
