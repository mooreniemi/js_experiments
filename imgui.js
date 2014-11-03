$ = require('./node_modules/jquery/dist/jquery');

var uiContext = {
    // types of user interaction that are hot: mouse click
    // hot
    hot: function(ui_id) {
        return ui_id.el();
    },
    // types of user interaction that are active: mouse over
    active: function(ui_id) {
        // every time something is "active" it does at least this
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

// bool
var doButton = function(ui_context,id,text){
  this.context = ui_context,
  this.init = function() { $(id).html('<button>'+ text + '</button>') },
  this.text = text;

  // compares our id vs the active id
  // if inside set hot
  // if is active
    // if mouse up (action over)
    // but still hot then true
    // also set not active
  // else if is hot
    // mouse went down
    // set active
  // draw the button etc

  this.init();
};

function update() {

};

module.exports.uiContext = uiContext;
module.exports.uiId = uiId;
module.exports.Widget = Widget;
module.exports.doButton = doButton;