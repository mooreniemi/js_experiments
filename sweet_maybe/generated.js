const Maybe_0 = require("./maybe");
const Do_1 = require("fantasydo");
let result_2;
result_2 = Do_1(function* () {
  let a_16 = yield Maybe_0.of(7);
  let q_17 = yield Maybe_0.none();
  let b_18 = yield Maybe_0.of(a_16 + 9);
  return b_18;
}, Maybe_0).val;
console.log(result_2);
result_2 = Do_1(function* () {
  var a_19 = yield Maybe_0.of(7);
  var b_20 = yield Maybe_0.of(a_19 + 9);
  return b_20;
}, Maybe_0).val;
console.log(result_2);

