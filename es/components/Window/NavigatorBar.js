import Icon from '../Icon';
import React from 'react';
import style from './NavigationBar.module.scss';
export default (function (_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? '公众号' : _ref$title;
  return /*#__PURE__*/React.createElement("div", {
    className: style.NavigatorBar,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("b", {
    className: style.Name
  }, title), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Icon, {
    type: "back",
    size: 18,
    className: style.BtnBackIcon,
    unit: "px"
  })));
});