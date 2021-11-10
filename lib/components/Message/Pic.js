"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _PicModule = _interopRequireDefault(require("./Pic.module.scss"));

var _default = function _default(_ref) {
  var imageUrl = _ref.imageUrl;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _PicModule["default"].PicWrapper
  }, /*#__PURE__*/_react["default"].createElement("img", {
    referrerPolicy: "no-referrer",
    src: imageUrl,
    className: _PicModule["default"].Pic
  }));
};

exports["default"] = _default;