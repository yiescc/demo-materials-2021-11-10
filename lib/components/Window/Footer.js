"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _FooterModule = _interopRequireDefault(require("./Footer.module.scss"));

var _default = function _default(props) {
  return /*#__PURE__*/_react["default"].createElement("footer", {
    className: _FooterModule["default"].Footer
  }, props.children);
};

exports["default"] = _default;