var ops = {
  value: function(value) {
    if(value !== undefined && value.hasOwnProperty("value")) {
      return value.value;
    } else if(value == undefined) {
      return 0;
    }
    else {
      return value;
    }
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
  this.succ = ops.succ;
  this.add = ops.add;
}

module.exports.Z = Z;
