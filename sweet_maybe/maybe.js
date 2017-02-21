/*jshint esversion: 6 */
/*jslint node: true */

const Maybe = {
  chain: function(f) {
    if (this.val !== null)
      return f(this.val);
    return this;
  },
  of: function(t) {
    return {
      "val": t,
      "chain": Maybe.chain
    };
  },
  none: function() {
    return {
      "val": null,
      "chain": Maybe.chain
    };
  }
};

module.exports = Maybe;
