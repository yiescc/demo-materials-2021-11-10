"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _StatusBar = _interopRequireDefault(require("./StatusBar"));

var _NavigatorBar = _interopRequireDefault(require("./NavigatorBar"));

var _Footer = _interopRequireDefault(require("./Footer"));

var _Menu = _interopRequireDefault(require("./Menu"));

var _indexModule = _interopRequireDefault(require("./index.module.scss"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Comps
var BaseWidth = 375;
var BaseHeight = 667;

function Window(_ref) {
  var children = _ref.children,
      width = _ref.width,
      height = _ref.height,
      footer = _ref.footer,
      navigationBarTitle = _ref.navigationBarTitle,
      style = _ref.style,
      hideStatusBar = _ref.hideStatusBar,
      hideNavigationBar = _ref.hideNavigationBar;
  var styleInfo = (0, _react.useMemo)(function () {
    var res = {
      width: BaseWidth + "px",
      height: BaseHeight + "px"
    };

    if (width) {
      var scale = width / BaseWidth;
      res.transform = "scale(" + scale + ")";

      if (height) {
        res.height = (height / scale).toFixed(2) + "px";
      } else {
        res.height = '100%';
      }
    }

    return res;
  }, [width, height]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: (0, _extends2["default"])({
      width: width,
      height: height
    }, style)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _indexModule["default"].Window,
    style: (0, _extends2["default"])({}, styleInfo)
  }, /*#__PURE__*/_react["default"].createElement("header", {
    className: _indexModule["default"].Header
  }, !hideStatusBar && /*#__PURE__*/_react["default"].createElement(_StatusBar["default"], null), !hideNavigationBar && /*#__PURE__*/_react["default"].createElement(_NavigatorBar["default"], {
    title: navigationBarTitle
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: _indexModule["default"].Container
  }, children), footer && /*#__PURE__*/_react["default"].createElement(_Footer["default"], null, footer)));
}

Window.Menu = _Menu["default"];
var _default = Window;
exports["default"] = _default;