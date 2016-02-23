var ops = {
  value: function(value) {
    if(value !== undefined && value.hasOwnProperty("value")) {
      return value.value;
    } else {
      return value;
    }
  },
  zero: function() {
    return new Z(0);
  },
  succ: function () {
    return new Z(this.value + 1);
  },
  add: function(zz) {
    if(zz !== undefined && zz.hasOwnProperty("value")) {
      return new Z(this.value + zz.value);
    } else {
      return new Z(this.value + zz);
    }
  }
};

function Z(value) {
  this.value = ops.value(value);
  this.zero = ops.zero;
  this.succ = ops.succ;
  this.add = ops.add;
}

module.exports.Z = Z;
