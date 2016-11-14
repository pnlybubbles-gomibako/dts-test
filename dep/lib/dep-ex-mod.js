"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __prefix__host_1 = require("__prefix__host");
var DepExMod = (function (_super) {
    __extends(DepExMod, _super);
    function DepExMod() {
        return _super.call(this) || this;
    }
    DepExMod.prototype.method = function () {
        return 'dep-ex-' + _super.prototype.method.call(this);
    };
    return DepExMod;
}(__prefix__host_1.Mod));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DepExMod;
//# sourceMappingURL=dep-ex-mod.js.map