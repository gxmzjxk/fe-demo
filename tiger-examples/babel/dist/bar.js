"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

// 类
var Bar = /*#__PURE__*/function () {
  function Bar() {
    (0, _classCallCheck2.default)(this, Bar);
  }

  (0, _createClass2.default)(Bar, [{
    key: "hello",
    value: function hello() {
      console.log('hello');
    }
  }]);
  return Bar;
}();