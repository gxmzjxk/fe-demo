"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _bar = require("./bar");

// let const
var a = 1;
var b = 2; // 箭头函数

var arrowFunc = function arrowFunc() {
  return '';
}; // 类


var Foo = /*#__PURE__*/function () {
  function Foo() {
    (0, _classCallCheck2.default)(this, Foo);
  }

  (0, _createClass2.default)(Foo, [{
    key: "hello",
    value: function hello() {
      console.log('hello');
    }
  }]);
  return Foo;
}(); // promise


function fetchSth() {
  return new _promise.default(function (resolve) {
    setTimeout(function () {
      resolve('fetchSth');
    }, 1000);
  });
} // async/await


function sayHi() {
  return _sayHi.apply(this, arguments);
}

function _sayHi() {
  _sayHi = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    var msg;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetchSth();

          case 2:
            msg = _context.sent;
            // ES6/ES7 feature
            console.log("template: ".concat(msg));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _sayHi.apply(this, arguments);
}