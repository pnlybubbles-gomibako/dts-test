"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __prefix__dep_1 = require("__prefix__dep");
var DepDepExMod = (function (_super) {
    __extends(DepDepExMod, _super);
    function DepDepExMod() {
        return _super.call(this) || this;
    }
    DepDepExMod.prototype.method = function () {
        return 'dep-dep-ex-' + _super.prototype.method.call(this);
    };
    return DepDepExMod;
}(__prefix__dep_1.DepExMod));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DepDepExMod;
//# sourceMappingURL=dep-dep-ex-mod.js.map