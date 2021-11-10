"use strict";

exports.__esModule = true;
exports.storeStateDefault = exports.storeStateCtx = exports.storeDispatcherCtx = void 0;

var _react = require("react");

var storeStateDefault = {
  name: '',
  menu: []
};
exports.storeStateDefault = storeStateDefault;
var storeStateCtx = /*#__PURE__*/(0, _react.createContext)(storeStateDefault);
exports.storeStateCtx = storeStateCtx;
var storeDispatcherCtx = /*#__PURE__*/(0, _react.createContext)({});
exports.storeDispatcherCtx = storeDispatcherCtx;