var ops = {
  value: function(value) {
    if(value !== undefined && value.isA("Z")) {
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
    if(zz !== undefined && zz.isA("Z")) {
      return new Z(this.value + zz.value);
    } else {
      return new Z(this.value + zz);
    }
  }
};

function isA(type) {
  return this.hasOwnProperty("type") && this.type === type;
}

Object.prototype.isA = isA;

function Z(value) {
  this.type = "Z";
  this.value = ops.value(value);
  this.succ = ops.succ;
  this.add = ops.add;
}

module.exports.Z = Z;
