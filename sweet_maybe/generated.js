const Maybe_0 = require("./maybe");
const Do_1 = require("fantasydo");
let result_2;
function* noneExample_8() {
  let a_17 = yield Maybe_0.of(7);
  let q_18 = yield Maybe_0.none();
  let b_19 = yield Maybe_0.of(a_17 + 9);
  return b_19;
}
result_2 = Do_1(noneExample_8, Maybe_0).val;
console.log(result_2);
function* addMaybes_16() {
  let a_20 = Maybe_0.of(7);
  let b_21 = Maybe_0.of(a_20);
  return b_21;
}
result_2 = Do_1(addMaybes_16, Maybe_0).val;
console.log(result_2);

