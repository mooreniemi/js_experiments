const Maybe_0 = require("./maybe");
const Do_1 = require("fantasydo");
function* addMaybes_14() {
  let a_17 = Maybe_0.of(7);
  let b_18 = Maybe_0.of(a_17);
  return b_18;
}
function* noneExample_15() {
  let a_19 = yield Maybe_0.of(7);
  let q_20 = yield Maybe_0.none();
  let b_21 = yield Maybe_0.of(a_19 + 9);
  return b_21;
}
let result_16 = Do_1(addMaybes_14, Maybe_0).val;
console.log(result_16);
result_16 = Do_1(noneExample_15, Maybe_0).val;
console.log(result_16);

