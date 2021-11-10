"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = OfficeAccountUI;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _StatusBar = _interopRequireDefault(require("./StatusBar"));

var _NavigatorBar = _interopRequireDefault(require("./NavigatorBar"));

var _Footer = _interopRequireDefault(require("./Footer"));

var _Menu = _interopRequireDefault(require("./Menu"));

var _store = require("./store");

require("./index.scss");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function OfficeAccountUI(props) {
  var storeState = (0, _react.useMemo)(function () {
    var _props$state;

    return (_props$state = props.state) !== null && _props$state !== void 0 ? _props$state : _store.storeStateDefault;
  }, [props.state]);
  var storeDispatch = (0, _react.useMemo)(function () {
    return (0, _extends2["default"])({}, props.menuDispatcher); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_store.storeDispatcherCtx.Provider, {
    value: storeDispatch
  }, /*#__PURE__*/_react["default"].createElement(_store.storeStateCtx.Provider, {
    value: storeState
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "wechat-office-account"
  }, /*#__PURE__*/_react["default"].createElement("header", {
    className: "wechat-office-account-header"
  }, /*#__PURE__*/_react["default"].createElement(_StatusBar["default"], null), /*#__PURE__*/_react["default"].createElement(_NavigatorBar["default"], null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "wechat-office-account-container"
  }), /*#__PURE__*/_react["default"].createElement(_Footer["default"], null, /*#__PURE__*/_react["default"].createElement(_Menu["default"], null)))));
}