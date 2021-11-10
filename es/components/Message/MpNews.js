import React, { useEffect, useMemo, useState } from 'react';
import wechatEmojiPlus from 'wechat-emoji-plus';
import styles from './MpNews.module.scss';

var ArticleGroupPic = function ArticleGroupPic(_ref) {
  var info = _ref.info;
  return /*#__PURE__*/React.createElement("article", {
    className: styles.Item
  }, /*#__PURE__*/React.createElement("header", {
    className: styles.ItemHeader
  }, /*#__PURE__*/React.createElement("i", {
    className: styles.ItemHeaderPic
  }, /*#__PURE__*/React.createElement("img", {
    referrerPolicy: "no-referrer",
    src: info.picUrl,
    className: styles.ItemHeaderPicImg
  })), /*#__PURE__*/React.createElement("b", {
    className: styles.ItemHeaderTitle
  }, info.title)));
};

var ArticleGroupText = function ArticleGroupText(_ref2) {
  var info = _ref2.info;
  return /*#__PURE__*/React.createElement("article", {
    className: styles.Item
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.ItemGroupTextContent
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.ItemGroupTextContentRight
  }, /*#__PURE__*/React.createElement("b", {
    className: styles.ItemGroupTextTitle
  }, info.title)), info.picUrl ? /*#__PURE__*/React.createElement("div", {
    className: styles.ItemGroupTextCover
  }, /*#__PURE__*/React.createElement("i", {
    className: styles.ItemHeaderPic
  }, /*#__PURE__*/React.createElement("img", {
    referrerPolicy: "no-referrer",
    src: info.picUrl,
    className: styles.ItemHeaderPicImg
  }))) : ''));
};

var ArticlePic = function ArticlePic(_ref3) {
  var info = _ref3.info;
  return /*#__PURE__*/React.createElement("article", {
    className: styles.Item
  }, /*#__PURE__*/React.createElement("header", {
    className: styles.ItemHeader,
    style: {
      height: info.picUrl ? undefined : 0
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: styles.ItemHeaderPic
  }, /*#__PURE__*/React.createElement("img", {
    referrerPolicy: "no-referrer",
    src: info.picUrl,
    className: styles.ItemHeaderPicImg
  }))), /*#__PURE__*/React.createElement("div", {
    className: styles.PicItemContent
  }, /*#__PURE__*/React.createElement("b", {
    className: styles.PicItemTitle
  }, info.title), /*#__PURE__*/React.createElement("p", {
    className: styles.PicItemDesc
  }, info.description)));
};

var ArticleTextStatus;

(function (ArticleTextStatus) {
  ArticleTextStatus["NORMAL"] = "ItemNormalText";
  ArticleTextStatus["HIDDEN"] = "ItemHiddenText";
  ArticleTextStatus["MORE"] = "ItemMoreText";
})(ArticleTextStatus || (ArticleTextStatus = {}));

var ArticleText = function ArticleText(_ref4) {
  var content = _ref4.content;
  var mpNewsTextDom = document.getElementById('mpNewsTextHidden');

  var _useState = useState(ArticleTextStatus.NORMAL),
      status = _useState[0],
      setStatus = _useState[1];

  var innerHTML = useMemo(function () {
    return wechatEmojiPlus.convertHTML(content.replace(/^<a\s+data-miniprogram-appid=.*>$/gm, function (val) {
      return "<i class=" + styles.MiniLogo + "></i>" + val;
    }));
  }, [content]);
  useEffect(function () {
    if (content === '') {
      setStatus(ArticleTextStatus.NORMAL);
      return;
    }

    if (!mpNewsTextDom) return;
    if (!mpNewsTextDom.clientHeight) return;

    if (mpNewsTextDom.clientHeight > 90) {
      if (status === ArticleTextStatus.MORE) return;
      setStatus(ArticleTextStatus.HIDDEN);
    } else {
      setStatus(ArticleTextStatus.NORMAL);
    }
  }, [mpNewsTextDom, mpNewsTextDom === null || mpNewsTextDom === void 0 ? void 0 : mpNewsTextDom.clientHeight, status, content]);
  return /*#__PURE__*/React.createElement("article", {
    className: styles.ItemText + " " + styles[status]
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.ItemContentBox
  }, /*#__PURE__*/React.createElement("div", {
    id: "mpNewsText",
    className: styles.ItemContent,
    dangerouslySetInnerHTML: {
      __html: innerHTML
    }
  }), /*#__PURE__*/React.createElement("div", {
    id: "mpNewsTextHidden",
    className: styles.ItemContentHidden,
    dangerouslySetInnerHTML: {
      __html: innerHTML
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: styles.ItemBtnBox,
    style: {
      display: status === ArticleTextStatus.HIDDEN ? 'block' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: styles.ItemBtn,
    onClick: function onClick() {
      setStatus(ArticleTextStatus.MORE);
    }
  }, "\u5C55\u5F00")), /*#__PURE__*/React.createElement("div", {
    className: styles.ItemBtnBox,
    style: {
      display: status === ArticleTextStatus.MORE ? 'block' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: styles.ItemBtn,
    onClick: function onClick() {
      setStatus(ArticleTextStatus.HIDDEN);
    }
  }, "\u6536\u8D77")));
};

export default (function (_ref5) {
  var _ref5$list = _ref5.list,
      list = _ref5$list === void 0 ? [] : _ref5$list,
      style = _ref5.style,
      className = _ref5.className;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.MpNews + " " + className,
    style: style
  }, list.length > 1 ? list.map(function (item, itemIdx) {
    if (itemIdx === 0) {
      // eslint-disable-next-line react/no-array-index-key
      return /*#__PURE__*/React.createElement(ArticleGroupPic, {
        info: item,
        key: itemIdx
      });
    } else {
      // eslint-disable-next-line react/no-array-index-key
      return /*#__PURE__*/React.createElement(ArticleGroupText, {
        info: item,
        key: itemIdx
      });
    }
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, list[0].picUrl ? /*#__PURE__*/React.createElement(ArticlePic, {
    info: list[0]
  }) : /*#__PURE__*/React.createElement(ArticleText, {
    content: list[0].title
  })));
});