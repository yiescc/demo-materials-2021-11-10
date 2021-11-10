"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _Icon = _interopRequireDefault(require("../Icon"));

require("./navigationBar.scss");

var _store = require("./store");

var _default = function _default() {
  var _useContext = (0, _react.useContext)(_store.storeStateCtx),
      name = _useContext.name;

  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    className: "wechat-office-account-navigation-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wechat-office-account-navigation-bar-left"
  }, /*#__PURE__*/React.createElement(_Icon["default"], {
    type: "back",
    size: 18,
    className: "wechat-office-account-navigation-bar-icon-back",
    unit: "px"
  })), /*#__PURE__*/React.createElement("div", {
    className: "wechat-office-account-navigation-bar-center"
  }, /*#__PURE__*/React.createElement("b", {
    className: "wechat-office-account-navigation-bar-title"
  }, name)), /*#__PURE__*/React.createElement("div", {
    className: "wechat-office-account-navigation-bar-right"
  }, /*#__PURE__*/React.createElement(_Icon["default"], {
    size: 18,
    type: "setting",
    className: "wechat-office-account-navigation-bar-icon-setting",
    unit: "px"
  })));
};

exports["default"] = _default;