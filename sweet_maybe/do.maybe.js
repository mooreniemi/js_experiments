/*jshint esversion: 6 */
/*jslint node: true */

const Maybe = require('./maybe');
const Do = require('fantasydo');

let result = Do(function*() {
  var a = yield Maybe.of(7);
  var b = yield Maybe.of(a + 9);
  return b;
}, Maybe).val;

console.log(result);

result = Do(function*() {
  var a = yield Maybe.of(7);
  var q = yield Maybe.none();
  var b = yield Maybe.of(a + 9);
  return b;
}, Maybe).val;

console.log(result);
