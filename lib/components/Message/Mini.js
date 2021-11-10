"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _MiniModule = _interopRequireDefault(require("./Mini.module.scss"));

var _default = function _default(_ref) {
  var info = _ref.info;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: _MiniModule["default"].Info
  }, /*#__PURE__*/_react["default"].createElement("img", {
    referrerPolicy: "no-referrer",
    className: _MiniModule["default"].Logo,
    src: info.logo
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: _MiniModule["default"].Name
  }, info.name)), /*#__PURE__*/_react["default"].createElement("b", {
    className: _MiniModule["default"].Title
  }, info.title), /*#__PURE__*/_react["default"].createElement("i", {
    className: _MiniModule["default"].Pic,
    style: {
      backgroundImage: "url(" + info.thumbUrl + ")"
    }
  }), /*#__PURE__*/_react["default"].createElement("i", {
    className: _MiniModule["default"].Split
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: _MiniModule["default"].Mark
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: _MiniModule["default"].MarkLogo
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: _MiniModule["default"].MarkName
  }, "\u5C0F\u7A0B\u5E8F")));
};

exports["default"] = _default;