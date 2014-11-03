// http://jlongster.com/Removing-User-Interface-Complexity,-or-Why-React-is-Awesome
// https://mollyrocket.com/861
// https://gist.github.com/jlongster/11192270

var jsdom = require("jsdom").jsdom;
global.document = jsdom("<button id='foo'>hello world</button><div id='bar'>bye now</div>");
global.window = document.parentWindow;

var boot = require('../boot.js'),
    // sut
    imgGui = require('../imgui.js'),
    $ = require('../node_modules/jquery/dist/jquery');

describe("some examples of imgui programming in javascript", function() {
    describe("#ui_context, models the state of the users interaction", function() {
        it("has a ui_id to pass around", function() {
            var Widget = imgGui.Widget,
                ui_id = new Widget('name');

            expect(ui_id.el().text()).toEqual("hello world");
        });

        it("by capturing the currently used widget", function() {
            var Widget = imgGui.Widget,
                ui_id = new Widget('name'),
                ui_context = imgGui.uiContext;

            expect(ui_context.active(ui_id).text()).toEqual("hello world and so on");
        });

        it("routing events via update to active", function() {
            // i click an element and an event fires
            // event is caught by the update router
            // update router forwards to active
        });
        it("uses weird button pattern", function() {
            var Widget = imgGui.Widget,
                ui_id = new Widget('#foo');

            new imgGui.doButton(ui_id, ui_id.name,'yes');
            expect($('#foo').text()).toEqual('yes');
        });
    });
});