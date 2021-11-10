"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _TextModule = _interopRequireDefault(require("./Text.module.scss"));

var _wechatEmojiPlus = _interopRequireDefault(require("wechat-emoji-plus"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function renderMiniLogo(content) {
  return content.replace(/^<a\s+data-miniprogram-appid=.*>$/gm, function (val) {
    return "<i class=" + _TextModule["default"].MiniLogo + "></i>" + val;
  });
}

var _default = function _default(_ref) {
  var Content = _ref.content;
  // eslint-disable-next-line react/no-danger
  var innerHTML = (0, _react.useMemo)(function () {
    return typeof Content === 'string' ? _wechatEmojiPlus["default"].convertHTML(renderMiniLogo(Content)) : '';
  }, [Content]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, typeof Content === 'string' ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      maxWidth: '234px'
    } // eslint-disable-next-line react/no-danger
    ,
    dangerouslySetInnerHTML: {
      __html: innerHTML
    }
  }) : Content);
};

exports["default"] = _default;