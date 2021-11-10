import React, { useMemo } from 'react';
import styles from './Text.module.scss';
import WechatEmoji from 'wechat-emoji-plus';

function renderMiniLogo(content) {
  return content.replace(/^<a\s+data-miniprogram-appid=.*>$/gm, function (val) {
    return "<i class=" + styles.MiniLogo + "></i>" + val;
  });
}

export default (function (_ref) {
  var Content = _ref.content;
  // eslint-disable-next-line react/no-danger
  var innerHTML = useMemo(function () {
    return typeof Content === 'string' ? WechatEmoji.convertHTML(renderMiniLogo(Content)) : '';
  }, [Content]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, typeof Content === 'string' ? /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '234px'
    } // eslint-disable-next-line react/no-danger
    ,
    dangerouslySetInnerHTML: {
      __html: innerHTML
    }
  }) : Content);
});