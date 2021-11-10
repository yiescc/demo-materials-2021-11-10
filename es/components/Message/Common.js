import ObjToClassName from '../../libs/ObjToClassName';
import style from './Common.module.scss';

var Content = function Content(_ref) {
  var _ObjToClassName;

  var isMine = _ref.isMine,
      msgType = _ref.msgType,
      children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    className: ObjToClassName((_ObjToClassName = {}, _ObjToClassName[style.Content] = msgType !== 'image', _ObjToClassName[style.ContentPic] = msgType === 'image', _ObjToClassName[style.ContentRight] = isMine && msgType !== 'image', _ObjToClassName[style.ContentLeft] = !isMine && msgType !== 'image', _ObjToClassName[style.ContentRightText] = isMine && msgType === 'text', _ObjToClassName))
  }, children);
};

export default (function (_ref2) {
  var _ObjToClassName2;

  var children = _ref2.children,
      width = _ref2.width,
      _ref2$isMine = _ref2.isMine,
      isMine = _ref2$isMine === void 0 ? false : _ref2$isMine,
      _ref2$avatar = _ref2.avatar,
      avatar = _ref2$avatar === void 0 ? '' : _ref2$avatar,
      msgType = _ref2.msgType,
      customContent = _ref2.customContent;
  return /*#__PURE__*/React.createElement("article", {
    className: ObjToClassName((_ObjToClassName2 = {}, _ObjToClassName2[style.Wrapper] = true, _ObjToClassName2[style.Center] = customContent, _ObjToClassName2[style.Mine] = isMine && !customContent, _ObjToClassName2[style.Other] = !isMine && !customContent, _ObjToClassName2)),
    style: {
      width: typeof width === 'number' ? width + "px" : width
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: style.left,
    style: {
      display: customContent ? 'none' : 'block'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: style.avatar,
    style: {
      backgroundImage: "url(" + avatar + ")"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: style.right
  }, customContent ? children : /*#__PURE__*/React.createElement(Content, {
    isMine: isMine,
    msgType: msgType
  }, children)));
});