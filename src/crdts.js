var ops = {
  zero: function() {
    return 0;
  },
  succ: function () {
    return this.value + 1;
  },
  add: function(zz) {
    return this.value + zz;
  }
};

function Z(value) {
  this.value = value;
  this.zero = ops.zero;
  this.succ = ops.succ;
  this.add = ops.add;
}

module.exports.Z = Z;
