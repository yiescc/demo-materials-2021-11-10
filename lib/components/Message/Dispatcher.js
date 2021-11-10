"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _index = _interopRequireDefault(require("./index"));

var _default = function _default(_ref) {
  var item = _ref.item;
  var Component = (0, _react.useMemo)(function () {
    switch (item.msgType) {
      case 'text':
        return /*#__PURE__*/React.createElement(_index["default"].Text, {
          content: item.data.content
        });

      case 'image':
        return /*#__PURE__*/React.createElement(_index["default"].Pic, {
          imageUrl: item.data.imageUrl
        });

      case 'miniProgramPage':
        return /*#__PURE__*/React.createElement(_index["default"].Mini, {
          info: item.data
        });

      case 'mpNews':
        return /*#__PURE__*/React.createElement(_index["default"].MpNews, {
          list: item.data.articles
        });

      case 'subscribe':
        return /*#__PURE__*/React.createElement(_index["default"].Subscribe, {
          info: item.data,
          type: item.subscribeType,
          officialAvatar: item.avatar,
          officialNickname: item.nickname
        });

      case 'template':
        return /*#__PURE__*/React.createElement(_index["default"].Template, {
          info: item.data
        });

      case 'news':
        return /*#__PURE__*/React.createElement(_index["default"].News, {
          info: item.data.articles[0]
        });

      default:
        return null;
    }
  }, [item]);
  return /*#__PURE__*/React.createElement(_index["default"].Wrapper, {
    avatar: item.avatar,
    isMine: item.isMine,
    msgType: item.msgType,
    customContent: item.msgType === 'mpNews' || item.msgType === 'subscribe' || item.msgType === 'template'
  }, Component);
};

exports["default"] = _default;