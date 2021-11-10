"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = OfficeAccountUI;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _StatusBar = _interopRequireDefault(require("./StatusBar"));

var _NavigatorBar = _interopRequireDefault(require("./NavigatorBar"));

var _Footer = _interopRequireDefault(require("./Footer"));

var _Menu = _interopRequireDefault(require("./Menu"));

var _store = require("./store");

require("./index.scss");

function OfficeAccountUI(props) {
  var storeState = (0, _react.useMemo)(function () {
    var _props$state;

    return (_props$state = props.state) !== null && _props$state !== void 0 ? _props$state : _store.storeStateDefault;
  }, [props.state]);
  var storeDispatch = (0, _react.useMemo)(function () {
    return (0, _extends2["default"])({}, props.menuDispatcher); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/React.createElement(_store.storeDispatcherCtx.Provider, {
    value: storeDispatch
  }, /*#__PURE__*/React.createElement(_store.storeStateCtx.Provider, {
    value: storeState
  }, /*#__PURE__*/React.createElement("div", {
    className: "wechat-office-account"
  }, /*#__PURE__*/React.createElement("header", {
    className: "wechat-office-account-header"
  }, /*#__PURE__*/React.createElement(_StatusBar["default"], null), /*#__PURE__*/React.createElement(_NavigatorBar["default"], null)), /*#__PURE__*/React.createElement("div", {
    className: "wechat-office-account-container"
  }), /*#__PURE__*/React.createElement(_Footer["default"], null, /*#__PURE__*/React.createElement(_Menu["default"], null)))));
}