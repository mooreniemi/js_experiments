require('../boot.js');

var MoP = require('../mop.js');

describe("some examples of message oriented programming in javascript", function() {
    describe("is composed of a type (behavior) and a value", function() {
        var newMessage = MoP.msg(MoP.Num, {
            val: 4
        })
        it("responds to common #go", function() {
            expect(newMessage.go).toBe(4);
        });
        it("responds to #asNum", function() {
            expect(newMessage.asNum).toBe(4);
        });
        it("responds to #asStr", function() {
            expect(newMessage.asStr).toBe('4');
        });
    });
    describe("can be used to compose functions, like addition", function() {
        var addMsg = MoP.msg(MoP.Add, {
            left: MoP.msg(MoP.Num, {
                val: 23
            }),
            right: MoP.msg(MoP.Num, {
                val: 44
            })
        });
        it("responds to common #go", function() {
            expect(addMsg.go).toBe(67);
        });
    });
});