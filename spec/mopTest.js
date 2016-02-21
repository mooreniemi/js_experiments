require('../boot.js');

var MoP = require('../src/mop.js');

// http://blog.interfacevision.com/design/design-mop-and-javascript/

describe("some examples of message oriented programming in javascript", function() {
    describe("basic prototypal inheritances works via #message", function() {
        var functor = {
                foo: function foo() {
                    return "foo";
                }
            },
            firstMessageObject = MoP.message(functor),
            secondMessageObject = MoP.message(functor);
        it("helps objects share common behavior", function() {
            expect(firstMessageObject.foo()).toBe("foo");
            expect(secondMessageObject.foo()).toBe("foo");
        });
    });
    describe("is composed of a type (behavior) and a value", function() {
        var newMessage = MoP.msg(MoP.Num, {
            val: 4
        });
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
        it("responds to #asNum", function() {
            expect(addMsg.asNum).toBe(67);
        });
        it("responds to #asStr", function() {
            expect(addMsg.asStr).toBe('2344');
        });
    });
});
