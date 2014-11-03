$ = require('./node_modules/jquery/dist/jquery');

var uiContext = {
    // types of user interaction that are hot: mouse click
    // hot
    hot: function(ui_id) {
        return ui_id.el();
    },
    // types of user interaction that are active: mouse over
    active: function(ui_id) {
        return ui_id.el().append(' and so on');
    }
};

var uiId = function() {
    this.parent = function() {
        return $(':parent');
    },
    this.el = function() {
      // selector of a modeled object
      // would be abstracted to call like a #name method
        return $('#foo');
    }
};

var Widget = function(name) {
  this.name = name;
};
Widget.prototype = new uiId();

function update() {

};

module.exports.uiContext = uiContext;
module.exports.uiId = uiId;
module.exports.Widget = Widget;