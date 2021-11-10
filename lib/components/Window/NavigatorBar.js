"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _Icon = _interopRequireDefault(require("../Icon"));

var _NavigationBarModule = _interopRequireDefault(require("./NavigationBar.module.scss"));

var _default = function _default(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? '公众号' : _ref$title;
  return /*#__PURE__*/React.createElement("div", {
    className: _NavigationBarModule["default"].NavigatorBar,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("b", {
    className: _NavigationBarModule["default"].Name
  }, title), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_Icon["default"], {
    type: "back",
    size: 18,
    className: _NavigationBarModule["default"].BtnBackIcon,
    unit: "px"
  })));
};

exports["default"] = _default;