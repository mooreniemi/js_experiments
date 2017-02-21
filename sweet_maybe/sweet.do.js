/*jshint esversion: 6 */
/*jslint node: true */
/* global syntax */

const Maybe = require('./maybe');
const Do = require('fantasydo');

syntax do = function(ctx) {
  let ident = ctx.next().value;
  let params = ctx.expand('expr').value;
  return #`Do(${params}, ${ident}).val`;
}

syntax @ = function (ctx) {
  let ident = ctx.next().value;
  let op1 = ctx.next().value;
  let op2 = ctx.next().value;
  let init = ctx.expand('expr').value;
  if(op1.isPunctuator() && op2 && op2.isPunctuator()) {
    return #`let ${ident} = ${init}`;
  } else {
    return #`${ident}`;
  }
}

function* addMaybes() {
  @a <- Maybe.of(7);
  @b <- Maybe.of(@a + 9);
  return @b;
}

function* noneExample() {
  let a = yield Maybe.of(7);
  let q = yield Maybe.none();
  let b = yield Maybe.of(a + 9);
  return b;
}

let result = do Maybe addMaybes;

console.log(result);

result = do Maybe noneExample;
console.log(result);
