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
	var hello_1 = __webpack_require__(1);
	exports.Hello = hello_1.default;
	// entry
	var main_1 = __webpack_require__(2);
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

/***/ },
/* 1 */
/***/ function(module, exports) {

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

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var hello_1 = __webpack_require__(1);
	function main() {
	    var i = new hello_1.default('world');
	    console.log(i.say());
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = main;
	//# sourceMappingURL=main.js.map

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map