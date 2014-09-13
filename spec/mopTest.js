var MoP = require('../mop.js');

console.log(MoP)

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(MoP.myFunc()).toBe(true);
  });
});