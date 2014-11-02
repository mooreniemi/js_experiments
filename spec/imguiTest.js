var jsdom = require("jsdom").jsdom;
global.document = jsdom("<div id='foo'>hello world</div>");
global.window = document.parentWindow;

var boot = require('../boot.js'),
    // sut
    imgGui = require('../imgui.js'),
    $ = require('../node_modules/jquery/dist/jquery');

console.log($('#foo').text())

// http://jlongster.com/Removing-User-Interface-Complexity,-or-Why-React-is-Awesome
// https://mollyrocket.com/861

describe("some examples of imgui programming in javascript", function() {
    describe("#ui_context, models the state of the users interaction", function() {
        it("has a ui_id to pass around", function() {
            var ui_id = imgGui.uiId;
            expect(ui_id.el).toEqual("selector");
        });

        it("by capturing the currently used widget", function() {
            var ui_id = imgGui.uiId,
                ui_context = imgGui.uiContext;
            expect(ui_context.active(ui_id)).toEqual("selector");
        });
    });
});