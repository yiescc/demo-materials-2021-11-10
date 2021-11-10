import _extends from "@babel/runtime/helpers/extends";
import { useMemo } from 'react'; // Comps

import StatusBar from './StatusBar';
import NavigatorBar from './NavigatorBar';
import Footer from './Footer';
import Menu from './Menu';
import styles from './index.module.scss';
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
  var styleInfo = useMemo(function () {
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
    style: _extends({
      width: width,
      height: height
    }, style)
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.Window,
    style: _extends({}, styleInfo)
  }, /*#__PURE__*/React.createElement("header", {
    className: styles.Header
  }, !hideStatusBar && /*#__PURE__*/React.createElement(StatusBar, null), !hideNavigationBar && /*#__PURE__*/React.createElement(NavigatorBar, {
    title: navigationBarTitle
  })), /*#__PURE__*/React.createElement("div", {
    className: styles.Container
  }, children), footer && /*#__PURE__*/React.createElement(Footer, null, footer)));
}

Window.Menu = Menu;
export default Window;