"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _wechatEmojiPlus = _interopRequireDefault(require("wechat-emoji-plus"));

var _MpNewsModule = _interopRequireDefault(require("./MpNews.module.scss"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ArticleGroupPic = function ArticleGroupPic(_ref) {
  var info = _ref.info;
  return /*#__PURE__*/_react["default"].createElement("article", {
    className: _MpNewsModule["default"].Item
  }, /*#__PURE__*/_react["default"].createElement("header", {
    className: _MpNewsModule["default"].ItemHeader
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: _MpNewsModule["default"].ItemHeaderPic
  }, /*#__PURE__*/_react["default"].createElement("img", {
    referrerPolicy: "no-referrer",
    src: info.picUrl,
    className: _MpNewsModule["default"].ItemHeaderPicImg
  })), /*#__PURE__*/_react["default"].createElement("b", {
    className: _MpNewsModule["default"].ItemHeaderTitle
  }, info.title)));
};

var ArticleGroupText = function ArticleGroupText(_ref2) {
  var info = _ref2.info;
  return /*#__PURE__*/_react["default"].createElement("article", {
    className: _MpNewsModule["default"].Item
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _MpNewsModule["default"].ItemGroupTextContent
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _MpNewsModule["default"].ItemGroupTextContentRight
  }, /*#__PURE__*/_react["default"].createElement("b", {
    className: _MpNewsModule["default"].ItemGroupTextTitle
  }, info.title)), info.picUrl ? /*#__PURE__*/_react["default"].createElement("div", {
    className: _MpNewsModule["default"].ItemGroupTextCover
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: _MpNewsModule["default"].ItemHeaderPic
  }, /*#__PURE__*/_react["default"].createElement("img", {
    referrerPolicy: "no-referrer",
    src: info.picUrl,
    className: _MpNewsModule["default"].ItemHeaderPicImg
  }))) : ''));
};

var ArticlePic = function ArticlePic(_ref3) {
  var info = _ref3.info;
  return /*#__PURE__*/_react["default"].createElement("article", {
    className: _MpNewsModule["default"].Item
  }, /*#__PURE__*/_react["default"].createElement("header", {
    className: _MpNewsModule["default"].ItemHeader,
    style: {
      height: info.picUrl ? undefined : 0
    }
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: _MpNewsModule["default"].ItemHeaderPic
  }, /*#__PURE__*/_react["default"].createElement("img", {
    referrerPolicy: "no-referrer",
    src: info.picUrl,
    className: _MpNewsModule["default"].ItemHeaderPicImg
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: _MpNewsModule["default"].PicItemContent
  }, /*#__PURE__*/_react["default"].createElement("b", {
    className: _MpNewsModule["default"].PicItemTitle
  }, info.title), /*#__PURE__*/_react["default"].createElement("p", {
    className: _MpNewsModule["default"].PicItemDesc
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

  var _useState = (0, _react.useState)(ArticleTextStatus.NORMAL),
      status = _useState[0],
      setStatus = _useState[1];

  var innerHTML = (0, _react.useMemo)(function () {
    return _wechatEmojiPlus["default"].convertHTML(content.replace(/^<a\s+data-miniprogram-appid=.*>$/gm, function (val) {
      return "<i class=" + _MpNewsModule["default"].MiniLogo + "></i>" + val;
    }));
  }, [content]);
  (0, _react.useEffect)(function () {
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
  return /*#__PURE__*/_react["default"].createElement("article", {
    className: _MpNewsModule["default"].ItemText + " " + _MpNewsModule["default"][status]
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _MpNewsModule["default"].ItemContentBox
  }, /*#__PURE__*/_react["default"].createElement("div", {
    id: "mpNewsText",
    className: _MpNewsModule["default"].ItemContent,
    dangerouslySetInnerHTML: {
      __html: innerHTML
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    id: "mpNewsTextHidden",
    className: _MpNewsModule["default"].ItemContentHidden,
    dangerouslySetInnerHTML: {
      __html: innerHTML
    }
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: _MpNewsModule["default"].ItemBtnBox,
    style: {
      display: status === ArticleTextStatus.HIDDEN ? 'block' : 'none'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: _MpNewsModule["default"].ItemBtn,
    onClick: function onClick() {
      setStatus(ArticleTextStatus.MORE);
    }
  }, "\u5C55\u5F00")), /*#__PURE__*/_react["default"].createElement("div", {
    className: _MpNewsModule["default"].ItemBtnBox,
    style: {
      display: status === ArticleTextStatus.MORE ? 'block' : 'none'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: _MpNewsModule["default"].ItemBtn,
    onClick: function onClick() {
      setStatus(ArticleTextStatus.HIDDEN);
    }
  }, "\u6536\u8D77")));
};

var _default = function _default(_ref5) {
  var _ref5$list = _ref5.list,
      list = _ref5$list === void 0 ? [] : _ref5$list,
      style = _ref5.style,
      className = _ref5.className;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _MpNewsModule["default"].MpNews + " " + className,
    style: style
  }, list.length > 1 ? list.map(function (item, itemIdx) {
    if (itemIdx === 0) {
      // eslint-disable-next-line react/no-array-index-key
      return /*#__PURE__*/_react["default"].createElement(ArticleGroupPic, {
        info: item,
        key: itemIdx
      });
    } else {
      // eslint-disable-next-line react/no-array-index-key
      return /*#__PURE__*/_react["default"].createElement(ArticleGroupText, {
        info: item,
        key: itemIdx
      });
    }
  }) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, list[0].picUrl ? /*#__PURE__*/_react["default"].createElement(ArticlePic, {
    info: list[0]
  }) : /*#__PURE__*/_react["default"].createElement(ArticleText, {
    content: list[0].title
  })));
};

exports["default"] = _default;