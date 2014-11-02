require('../boot.js');

var imgGui = require('../imgui.js');

// http://jlongster.com/Removing-User-Interface-Complexity,-or-Why-React-is-Awesome
// https://mollyrocket.com/861

describe("some examples of imgui programming in javascript", function() {
    describe("#ui_context", function() {
        it("models the state of the users interaction", function() {
            expect(imgGui.uiContext).toBe({});
        });
    });
});