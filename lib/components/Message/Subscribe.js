"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _SubscribeModule = _interopRequireDefault(require("./Subscribe.module.scss"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Title = function Title(_ref) {
  var title = _ref.title;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _SubscribeModule["default"].Title
  }, title);
};

var IconMore = function IconMore() {
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: _SubscribeModule["default"].IconMore
  }, "...");
};

var ContentList = function ContentList(_ref2) {
  var info = _ref2.info,
      keyList = _ref2.keyList;
  return /*#__PURE__*/_react["default"].createElement("ul", {
    className: _SubscribeModule["default"].ContentList
  }, keyList.map(function (item) {
    var _info$data$item$value;

    return /*#__PURE__*/_react["default"].createElement("li", {
      key: item.key,
      className: _SubscribeModule["default"].ContentItem
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: _SubscribeModule["default"].Key
    }, item.key), /*#__PURE__*/_react["default"].createElement("div", {
      className: _SubscribeModule["default"].Value
    }, (_info$data$item$value = info.data[item.value]) !== null && _info$data$item$value !== void 0 ? _info$data$item$value : item.example));
  }));
};

var Footer = function Footer(_ref3) {
  var _ref3$visible = _ref3.visible,
      visible = _ref3$visible === void 0 ? true : _ref3$visible;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _SubscribeModule["default"].Footer,
    style: {
      display: visible ? 'block' : 'none'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _SubscribeModule["default"].FooterContent
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _SubscribeModule["default"].Text
  }, "\u67E5\u770B\u8BE6\u60C5"), /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    type: "back",
    className: _SubscribeModule["default"].Icon
  })));
};

var OfficialSubscribe = function OfficialSubscribe(_ref4) {
  var info = _ref4.info,
      style = _ref4.style,
      className = _ref4.className,
      keyList = _ref4.keyList,
      officialAvatar = _ref4.officialAvatar,
      officialNickname = _ref4.officialNickname;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _SubscribeModule["default"].OfficialSubscribe + " " + className + " ",
    style: style
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _SubscribeModule["default"].OfficialSubscribeContainer
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _SubscribeModule["default"].OfficialSubscribeHeader
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _SubscribeModule["default"].Left
  }, /*#__PURE__*/_react["default"].createElement("img", {
    referrerPolicy: "no-referrer",
    className: _SubscribeModule["default"].OfficialAvatar,
    src: officialAvatar
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: _SubscribeModule["default"].OfficialNickname
  }, officialNickname)), /*#__PURE__*/_react["default"].createElement("div", {
    className: _SubscribeModule["default"].Right
  }, /*#__PURE__*/_react["default"].createElement(IconMore, null))), /*#__PURE__*/_react["default"].createElement("div", {
    className: _SubscribeModule["default"].OfficialSubscribeMain
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      margin: '16px 0 18px'
    }
  }, /*#__PURE__*/_react["default"].createElement(Title, {
    title: info.title
  })), /*#__PURE__*/_react["default"].createElement(ContentList, {
    keyList: keyList,
    info: info
  })), /*#__PURE__*/_react["default"].createElement(Footer, {
    visible: info.page !== '' || info.miniprogram.appid !== ''
  })));
};

var ServiceSubscribe = function ServiceSubscribe(_ref5) {
  var info = _ref5.info,
      style = _ref5.style,
      className = _ref5.className,
      keyList = _ref5.keyList;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _SubscribeModule["default"].ServiceSubscribe + " " + className,
    style: style
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _SubscribeModule["default"].ServiceSubscribeContainer
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _SubscribeModule["default"].ServiceSubscribeHeader
  }, /*#__PURE__*/_react["default"].createElement(Title, {
    title: info.title
  }), /*#__PURE__*/_react["default"].createElement(IconMore, null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: _SubscribeModule["default"].ServiceSubscribeMain
  }, /*#__PURE__*/_react["default"].createElement(ContentList, {
    keyList: keyList,
    info: info
  })), /*#__PURE__*/_react["default"].createElement(Footer, {
    visible: info.page !== '' || info.miniprogram.appid !== ''
  })));
};

function Subscribe(props) {
  var exampleValueList = (0, _react.useMemo)(function () {
    return props.info.example.split('\n').map(function (item) {
      return item.split(':')[1];
    });
  }, [props.info.example]);
  var keyList = (0, _react.useMemo)(function () {
    return props.info.content.split('\n').filter(function (item) {
      return item;
    }).map(function (item, index) {
      var list = item.split(':');
      return {
        key: list[0],
        value: list[1].replace('{{', '').replace('}}', '').split('.')[0],
        example: exampleValueList[index]
      };
    }).filter(function (item) {
      return item.key;
    });
  }, [exampleValueList, props.info.content]);
  if (!props.info.templateId) return null;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, props.type === 'service' ? /*#__PURE__*/_react["default"].createElement(OfficialSubscribe, (0, _extends2["default"])({}, props, {
    keyList: keyList
  })) : /*#__PURE__*/_react["default"].createElement(ServiceSubscribe, (0, _extends2["default"])({}, props, {
    keyList: keyList
  })));
}

var _default = Subscribe;
exports["default"] = _default;