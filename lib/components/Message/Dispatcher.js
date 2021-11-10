"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _index = _interopRequireDefault(require("./index"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = function _default(_ref) {
  var item = _ref.item;
  var Component = (0, _react.useMemo)(function () {
    switch (item.msgType) {
      case 'text':
        return /*#__PURE__*/_react["default"].createElement(_index["default"].Text, {
          content: item.data.content
        });

      case 'image':
        return /*#__PURE__*/_react["default"].createElement(_index["default"].Pic, {
          imageUrl: item.data.imageUrl
        });

      case 'miniProgramPage':
        return /*#__PURE__*/_react["default"].createElement(_index["default"].Mini, {
          info: item.data
        });

      case 'mpNews':
        return /*#__PURE__*/_react["default"].createElement(_index["default"].MpNews, {
          list: item.data.articles
        });

      case 'subscribe':
        return /*#__PURE__*/_react["default"].createElement(_index["default"].Subscribe, {
          info: item.data,
          type: item.subscribeType,
          officialAvatar: item.avatar,
          officialNickname: item.nickname
        });

      case 'template':
        return /*#__PURE__*/_react["default"].createElement(_index["default"].Template, {
          info: item.data
        });

      case 'news':
        return /*#__PURE__*/_react["default"].createElement(_index["default"].News, {
          info: item.data.articles[0]
        });

      default:
        return null;
    }
  }, [item]);
  return /*#__PURE__*/_react["default"].createElement(_index["default"].Wrapper, {
    avatar: item.avatar,
    isMine: item.isMine,
    msgType: item.msgType,
    customContent: item.msgType === 'mpNews' || item.msgType === 'subscribe' || item.msgType === 'template'
  }, Component);
};

exports["default"] = _default;