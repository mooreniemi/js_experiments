var reporters = require('jasmine-reporters');
jasmine.getEnv().addReporter(new reporters.TerminalReporter({
    verbosity: 3,
    color: true
}));

var MoP = require('../mop.js');

describe("some examples of message oriented programming in javascript", function() {
    it("is composed of a type (behavior) and a value", function() {
        var newMessage = MoP.msg(MoP.Num, {
            val: 4
        })
        expect(newMessage.go).toBe(4);
    });
});