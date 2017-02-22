/*jshint esversion: 6 */
/*jslint node: true */
/* global syntax */

const Maybe = require('./maybe');
const Do = require('fantasydo');
let result;

syntax do = function(ctx) {
  let ident = ctx.next().value;
  let params = ctx.expand('expr').value;
  return #`Do(${params}, ${ident}).val`;
}

function* noneExample() {
  let a = yield Maybe.of(7);
  let q = yield Maybe.none();
  let b = yield Maybe.of(a + 9);
  return b;
}

result = do Maybe noneExample;
console.log(result);

syntax @ = function (ctx) {
  let ident = ctx.next().value;
  let marker = ctx.mark();
  let op1 = ctx.next().value;
  let init = ctx.expand('expr').value;
  let dummy = #`dummy`.get(0);

  if(op1 && op1.isPunctuator("<<=")) {
    //result = result.concat(#`if(${c}(state,global))${dummy.fromKeyword('return')} (${r}(state, global));`);
    let result = #``;
    let foo = #`var ${ident} = ${dummy.fromKeyword('yield')} ${init}`;
    return result.concat(foo);
  } else {
    ctx.reset(marker);
    return #`${ident}`;
  }
}

function* addMaybes() {
  @a <<= Maybe.of(7);
  @b <<= Maybe.of(@a + 9);
  return @b;
}

result = do Maybe addMaybes;
console.log(result);
