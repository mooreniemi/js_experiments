const Maybe_0 = require("./maybe");
const Do_1 = require("fantasydo");
let result_2;
function* noneExample_8() {
  let a_20 = yield Maybe_0.of(7);
  let q_21 = yield Maybe_0.none();
  let b_22 = yield Maybe_0.of(a_20 + 9);
  return b_22;
}
result_2 = Do_1(noneExample_8, Maybe_0).val;
console.log(result_2);
function* addMaybes_19() {
  var a_23 = yield;
  Maybe_0.of(7);
  var b_24 = yield;
  Maybe_0.of(a_23 + 9);
  return b_24;
}
result_2 = Do_1(addMaybes_19, Maybe_0).val;
console.log(result_2);

