import { useMemo } from 'react';
import message from './index';
export default (function (_ref) {
  var item = _ref.item;
  var Component = useMemo(function () {
    switch (item.msgType) {
      case 'text':
        return /*#__PURE__*/React.createElement(message.Text, {
          content: item.data.content
        });

      case 'image':
        return /*#__PURE__*/React.createElement(message.Pic, {
          imageUrl: item.data.imageUrl
        });

      case 'miniProgramPage':
        return /*#__PURE__*/React.createElement(message.Mini, {
          info: item.data
        });

      case 'mpNews':
        return /*#__PURE__*/React.createElement(message.MpNews, {
          list: item.data.articles
        });

      case 'subscribe':
        return /*#__PURE__*/React.createElement(message.Subscribe, {
          info: item.data,
          type: item.subscribeType,
          officialAvatar: item.avatar,
          officialNickname: item.nickname
        });

      case 'template':
        return /*#__PURE__*/React.createElement(message.Template, {
          info: item.data
        });

      case 'news':
        return /*#__PURE__*/React.createElement(message.News, {
          info: item.data.articles[0]
        });

      default:
        return null;
    }
  }, [item]);
  return /*#__PURE__*/React.createElement(message.Wrapper, {
    avatar: item.avatar,
    isMine: item.isMine,
    msgType: item.msgType,
    customContent: item.msgType === 'mpNews' || item.msgType === 'subscribe' || item.msgType === 'template'
  }, Component);
});