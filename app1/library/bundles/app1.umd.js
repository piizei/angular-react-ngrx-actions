(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.app1 = {})));
}(this, (function (exports) { 'use strict';

var OPEN_NAVBAR = '[Layout] Open Navbar';
var CLOSE_NAVBAR = '[Layout] Close Navbar';
var NAVBAR_QUEUE = 'navbar.dispatch';

exports.OPEN_NAVBAR = OPEN_NAVBAR;
exports.CLOSE_NAVBAR = CLOSE_NAVBAR;
exports.NAVBAR_QUEUE = NAVBAR_QUEUE;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=app1.umd.js.map
