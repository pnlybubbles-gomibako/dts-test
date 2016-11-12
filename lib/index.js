"use strict";
var hello_1 = require('./hello');
exports.Hello = hello_1.default;
// entry
var main_1 = require('./main');
// merge
// expose
if (typeof window !== 'undefined') {
    var expose = {
        Hello: hello_1.default,
    };
    window['$'] = main_1.default;
    for (var k in expose) {
        window['$'][k] = expose[k];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = main_1.default;
//# sourceMappingURL=index.js.map