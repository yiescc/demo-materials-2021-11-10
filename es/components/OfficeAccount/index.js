import _extends from "@babel/runtime/helpers/extends";
import { useMemo } from 'react';
import StatusBar from './StatusBar';
import NavigatorBar from './NavigatorBar';
import Footer from './Footer';
import Menu from './Menu';
import { storeDispatcherCtx, storeStateCtx, storeStateDefault } from './store';
import './index.scss';
export default function OfficeAccountUI(props) {
  var storeState = useMemo(function () {
    var _props$state;

    return (_props$state = props.state) !== null && _props$state !== void 0 ? _props$state : storeStateDefault;
  }, [props.state]);
  var storeDispatch = useMemo(function () {
    return _extends({}, props.menuDispatcher); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/React.createElement(storeDispatcherCtx.Provider, {
    value: storeDispatch
  }, /*#__PURE__*/React.createElement(storeStateCtx.Provider, {
    value: storeState
  }, /*#__PURE__*/React.createElement("div", {
    className: "wechat-office-account"
  }, /*#__PURE__*/React.createElement("header", {
    className: "wechat-office-account-header"
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement(NavigatorBar, null)), /*#__PURE__*/React.createElement("div", {
    className: "wechat-office-account-container"
  }), /*#__PURE__*/React.createElement(Footer, null, /*#__PURE__*/React.createElement(Menu, null)))));
}