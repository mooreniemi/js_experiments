/*jshint esversion: 6 */
/*jslint node: true */
/* global syntax */

const Maybe = require('./maybe');
const Do = require('fantasydo');
let result;

syntax do = function(ctx) {
  let ident = ctx.next().value;
  let bodyCtx = ctx.next().value.inner();
  return #`Do(function* () {
              ${bodyCtx} },
              ${ident}).val`;
}

result = do Maybe {
  let a = yield Maybe.of(7);
  let q = yield Maybe.none();
  let b = yield Maybe.of(a + 9);
  return b;
 };

console.log(result);

syntax @ = function (ctx) {
  let ident = ctx.next().value;
  let marker = ctx.mark();
  let op1 = ctx.next().value;
  let op2 = ctx.next().value;
  let init = ctx.expand('expr').value;

  if(op1 && op2 && op1.isPunctuator("<") && op2.isPunctuator("-")) {
    return #`var ${ident} = yield (${init})`;
  } else {
    ctx.reset(marker);
    return #`${ident}`;
  }
}

result = do Maybe {
  @a <- Maybe.of(7);
  @b <- Maybe.of(@a + 9);
  return @b;
};
console.log(result);
