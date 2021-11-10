import { useContext } from 'react';
import Icon from '../Icon';
import './navigationBar.scss';
import { storeStateCtx } from './store';
export default (function () {
  var _useContext = useContext(storeStateCtx),
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
  }, /*#__PURE__*/React.createElement(Icon, {
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
  }, /*#__PURE__*/React.createElement(Icon, {
    size: 18,
    type: "setting",
    className: "wechat-office-account-navigation-bar-icon-setting",
    unit: "px"
  })));
});