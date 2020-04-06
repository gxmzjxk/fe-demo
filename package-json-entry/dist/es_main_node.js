/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/es-main-node.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@isleepy/pkg-entry/lib/index.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/@isleepy/pkg-entry/lib/index.mjs ***!
  \*******************************************************/
/*! exports provided: test, another */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"test\", function() { return test; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"another\", function() { return another; });\n/*\n * @Description:\n * @Author: Xiaokun.jiang\n * @Email: jiangxiaokun@bytedance.com\n * @Date: 2020-04-06 10:30:52\n * @LastEditTime: 2020-04-06 15:48:20\n */\nconst test = function () {\n    console.log('[ES Module] test function');\n};\n\nconst another = function () {\n    console.log('[ES Module] another function');\n};\n\n\n\n\n//# sourceURL=webpack:///./node_modules/@isleepy/pkg-entry/lib/index.mjs?");

/***/ }),

/***/ "./src/es-main-node.js":
/*!*****************************!*\
  !*** ./src/es-main-node.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _isleepy_pkg_entry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @isleepy/pkg-entry */ \"./node_modules/@isleepy/pkg-entry/lib/index.mjs\");\n/*\n * @Description:\n * @Author: Xiaokun.jiang\n * @Email: jiangxiaokun@bytedance.com\n * @Date: 2020-04-06 17:58:22\n * @LastEditTime: 2020-04-06 17:59:59\n */\n\n\n\nObject(_isleepy_pkg_entry__WEBPACK_IMPORTED_MODULE_0__[\"test\"])();\n\nObject(_isleepy_pkg_entry__WEBPACK_IMPORTED_MODULE_0__[\"another\"])();\n\n\n//# sourceURL=webpack:///./src/es-main-node.js?");

/***/ })

/******/ });