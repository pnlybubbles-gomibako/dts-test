"use strict";
var dep_mod_1 = require("./dep-mod");
var dep_ex_mod_1 = require("./dep-ex-mod");
function main() {
    console.log(new dep_mod_1.default().method());
    console.log(new dep_ex_mod_1.default().method());
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = main;
//# sourceMappingURL=main.js.map