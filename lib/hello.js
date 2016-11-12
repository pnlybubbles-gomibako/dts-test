"use strict";
var Hello = (function () {
    function Hello(t) {
        this.target = '';
        this.target = t;
    }
    Hello.prototype.say = function () {
        return 'hello ' + this.target;
    };
    return Hello;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Hello;
//# sourceMappingURL=hello.js.map