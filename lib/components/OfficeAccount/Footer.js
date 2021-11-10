"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("./footer.scss");

var _default = function _default(props) {
  return /*#__PURE__*/_react["default"].createElement("footer", {
    className: "wechat-office-account-footer"
  }, props.children);
};

exports["default"] = _default;