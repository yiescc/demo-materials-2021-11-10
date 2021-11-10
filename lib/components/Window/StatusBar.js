"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _StatusBarModule = _interopRequireDefault(require("./StatusBar.module.scss"));

var _default = function _default() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    className: _StatusBarModule["default"].StatusBar
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _StatusBarModule["default"].Left
  }, /*#__PURE__*/_react["default"].createElement("time", {
    className: _StatusBarModule["default"].Time
  }, "08:08")), /*#__PURE__*/_react["default"].createElement("div", {
    className: _StatusBarModule["default"].Right
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: _StatusBarModule["default"].RightIcon
  })));
};

exports["default"] = _default;