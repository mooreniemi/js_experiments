var uiContext = {
    // types of user interactiont hat are hot: mouse click
    // hot
    hot: function(ui_id) {
        return ui_id.el;
    },
    // types of user interaction that are active: mouse over
    active: function(ui_id) {
        return ui_id.el;
    }
};

var uiId = {
    get parent() {
        return "parent_of_selector"
    },
    get el() {
        return "selector"
    }
};

function update() {

};

module.exports.uiContext = uiContext;
module.exports.uiId = uiId;