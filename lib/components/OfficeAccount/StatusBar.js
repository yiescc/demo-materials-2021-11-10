"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("./statusBar.scss");

var _default = function _default() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    className: "wechat-office-account-status-bar"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "wechat-office-account-status-bar-left"
  }, /*#__PURE__*/_react["default"].createElement("time", {
    className: "wechat-office-account-status-bar-time"
  }, "08:08")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "wechat-office-account-status-bar-right"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "wechat-office-account-status-bar-right-icon"
  })));
};

exports["default"] = _default;