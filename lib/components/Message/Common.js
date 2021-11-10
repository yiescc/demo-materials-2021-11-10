"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ObjToClassName3 = _interopRequireDefault(require("../../libs/ObjToClassName"));

var _CommonModule = _interopRequireDefault(require("./Common.module.scss"));

var Content = function Content(_ref) {
  var _ObjToClassName;

  var isMine = _ref.isMine,
      msgType = _ref.msgType,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _ObjToClassName3["default"])((_ObjToClassName = {}, _ObjToClassName[_CommonModule["default"].Content] = msgType !== 'image', _ObjToClassName[_CommonModule["default"].ContentPic] = msgType === 'image', _ObjToClassName[_CommonModule["default"].ContentRight] = isMine && msgType !== 'image', _ObjToClassName[_CommonModule["default"].ContentLeft] = !isMine && msgType !== 'image', _ObjToClassName[_CommonModule["default"].ContentRightText] = isMine && msgType === 'text', _ObjToClassName))
  }, children);
};

var _default = function _default(_ref2) {
  var _ObjToClassName2;

  var children = _ref2.children,
      width = _ref2.width,
      _ref2$isMine = _ref2.isMine,
      isMine = _ref2$isMine === void 0 ? false : _ref2$isMine,
      _ref2$avatar = _ref2.avatar,
      avatar = _ref2$avatar === void 0 ? '' : _ref2$avatar,
      msgType = _ref2.msgType,
      customContent = _ref2.customContent;
  return /*#__PURE__*/_react["default"].createElement("article", {
    className: (0, _ObjToClassName3["default"])((_ObjToClassName2 = {}, _ObjToClassName2[_CommonModule["default"].Wrapper] = true, _ObjToClassName2[_CommonModule["default"].Center] = customContent, _ObjToClassName2[_CommonModule["default"].Mine] = isMine && !customContent, _ObjToClassName2[_CommonModule["default"].Other] = !isMine && !customContent, _ObjToClassName2)),
    style: {
      width: typeof width === 'number' ? width + "px" : width
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _CommonModule["default"].left,
    style: {
      display: customContent ? 'none' : 'block'
    }
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: _CommonModule["default"].avatar,
    style: {
      backgroundImage: "url(" + avatar + ")"
    }
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: _CommonModule["default"].right
  }, customContent ? children : /*#__PURE__*/_react["default"].createElement(Content, {
    isMine: isMine,
    msgType: msgType
  }, children)));
};

exports["default"] = _default;