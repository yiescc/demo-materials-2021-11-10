"use strict";

exports.__esModule = true;
exports["default"] = void 0;

require("./statusBar.scss");

var _default = function _default() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    className: "wechat-office-account-status-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wechat-office-account-status-bar-left"
  }, /*#__PURE__*/React.createElement("time", {
    className: "wechat-office-account-status-bar-time"
  }, "08:08")), /*#__PURE__*/React.createElement("div", {
    className: "wechat-office-account-status-bar-right"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wechat-office-account-status-bar-right-icon"
  })));
};

exports["default"] = _default;