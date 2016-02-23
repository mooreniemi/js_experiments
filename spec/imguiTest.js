// http://jlongster.com/Removing-User-Interface-Complexity,-or-Why-React-is-Awesome
// https://mollyrocket.com/861
// https://gist.github.com/jlongster/11192270
// http://sol.gfxile.net/files/Assembly07_IMGUI.pdf

var jsdom = require("jsdom");
window = jsdom.jsdom("<button id='foo'>hello world</button><div id='bar'>bye now</div>").createWindow();
if(Object.keys(window).length === 0) {
    // this hapens if contextify, one of jsdom's dependencies doesn't install correctly
    // (it installs different code depending on the OS, so it cannot get checked in.);
    throw "jsdom failed to create a usable environment, try uninstalling and reinstalling it";
}
global.window = window;
global.document = window.document;

var boot = require('../boot.js'),
    // sut
    imgGui = require('../src/imgui.js'),
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
