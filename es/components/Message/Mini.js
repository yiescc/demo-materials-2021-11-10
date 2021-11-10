import React from 'react';
import style from './Mini.module.scss';
export default (function (_ref) {
  var info = _ref.info;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: style.Info
  }, /*#__PURE__*/React.createElement("img", {
    referrerPolicy: "no-referrer",
    className: style.Logo,
    src: info.logo
  }), /*#__PURE__*/React.createElement("span", {
    className: style.Name
  }, info.name)), /*#__PURE__*/React.createElement("b", {
    className: style.Title
  }, info.title), /*#__PURE__*/React.createElement("i", {
    className: style.Pic,
    style: {
      backgroundImage: "url(" + info.thumbUrl + ")"
    }
  }), /*#__PURE__*/React.createElement("i", {
    className: style.Split
  }), /*#__PURE__*/React.createElement("div", {
    className: style.Mark
  }, /*#__PURE__*/React.createElement("i", {
    className: style.MarkLogo
  }), /*#__PURE__*/React.createElement("span", {
    className: style.MarkName
  }, "\u5C0F\u7A0B\u5E8F")));
});