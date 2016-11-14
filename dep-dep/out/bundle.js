this["__prefix__dep-dep"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var dep_dep_ex_mod_1 = __webpack_require__(1);
	exports.DepDepExMod = dep_dep_ex_mod_1.default;
	var main_1 = __webpack_require__(3);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = main_1.default;
	//# sourceMappingURL=index.js.map

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __prefix__dep_1 = __webpack_require__(2);
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

/***/ },
/* 2 */
/***/ function(module, exports) {

	(function() { module.exports = this["__prefix__dep"]; }());

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var dep_dep_ex_mod_1 = __webpack_require__(1);
	function main() {
	    console.log(new dep_dep_ex_mod_1.default().method());
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = main;
	//# sourceMappingURL=main.js.map

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map