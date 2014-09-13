var Message = {
    get go() {
        // code goes here
        // return something;
    },
    get asNum() {
        // code goes here
        // return numeric;
    },
    get asStr() {
        // code goes here
        // return string;
    }
};

var Num = {
    get go() {
        return this.asNum;
    },
    get asNum() {
        return this.data.val;
    },
    get asStr() {
        return this.data.val.toString();
    }
};

function msg(behavior, data) {
    var Msg = function() {};
    Msg.prototype = behavior; // shared behavior and data (if any)
    var msg = new Msg();
    msg.data = data; // instance specific data
    return msg;
};

module.exports.Message = Message;
module.exports.Num = Num;
module.exports.msg = msg;