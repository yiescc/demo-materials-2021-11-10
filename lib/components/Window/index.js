"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _StatusBar = _interopRequireDefault(require("./StatusBar"));

var _NavigatorBar = _interopRequireDefault(require("./NavigatorBar"));

var _Footer = _interopRequireDefault(require("./Footer"));

var _Menu = _interopRequireDefault(require("./Menu"));

var _indexModule = _interopRequireDefault(require("./index.module.scss"));

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
  return /*#__PURE__*/React.createElement("div", {
    style: (0, _extends2["default"])({
      width: width,
      height: height
    }, style)
  }, /*#__PURE__*/React.createElement("div", {
    className: _indexModule["default"].Window,
    style: (0, _extends2["default"])({}, styleInfo)
  }, /*#__PURE__*/React.createElement("header", {
    className: _indexModule["default"].Header
  }, !hideStatusBar && /*#__PURE__*/React.createElement(_StatusBar["default"], null), !hideNavigationBar && /*#__PURE__*/React.createElement(_NavigatorBar["default"], {
    title: navigationBarTitle
  })), /*#__PURE__*/React.createElement("div", {
    className: _indexModule["default"].Container
  }, children), footer && /*#__PURE__*/React.createElement(_Footer["default"], null, footer)));
}

Window.Menu = _Menu["default"];
var _default = Window;
exports["default"] = _default;