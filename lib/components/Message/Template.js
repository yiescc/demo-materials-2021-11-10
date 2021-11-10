"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _TemplateModule = _interopRequireDefault(require("./Template.module.scss"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Title = function Title(_ref) {
  var title = _ref.title;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _TemplateModule["default"].Title
  }, title);
};

var IconMore = function IconMore() {
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: _TemplateModule["default"].IconMore
  }, "...");
};

var ContentList = function ContentList(_ref2) {
  var info = _ref2.info;
  var maxLabelLength = (0, _react.useMemo)(function () {
    var result = '';
    Object.keys(info.data).forEach(function (key) {
      if (info.data[key].label.length > result.length) {
        result = info.data[key].label;
      }
    });
    return result.length * 14 + 16;
  }, [info]);
  return /*#__PURE__*/_react["default"].createElement("ul", {
    className: _TemplateModule["default"].ContentList
  }, Object.keys(info.data).map(function (key) {
    if (info.data[key].label === '') return null;
    return info.data[key].label === '首行' ? /*#__PURE__*/_react["default"].createElement("li", {
      key: key,
      className: _TemplateModule["default"].ContentItemFirst
    }, info.data[key].value ? info.data[key].value : info.data[key].example) : /*#__PURE__*/_react["default"].createElement("li", {
      key: key,
      className: _TemplateModule["default"].ContentItem
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: _TemplateModule["default"].Key,
      style: {
        width: maxLabelLength + "px"
      }
    }, info.data[key].label, ":"), /*#__PURE__*/_react["default"].createElement("div", {
      className: _TemplateModule["default"].Value,
      style: {
        color: "" + info.data[key].color
      }
    }, info.data[key].value ? info.data[key].value : info.data[key].example));
  }));
};

var Footer = function Footer(_ref3) {
  var _ref3$visible = _ref3.visible,
      visible = _ref3$visible === void 0 ? true : _ref3$visible;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _TemplateModule["default"].Footer,
    style: {
      display: visible ? 'block' : 'none'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _TemplateModule["default"].FooterContent
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _TemplateModule["default"].Text
  }, "\u67E5\u770B\u8BE6\u60C5"), /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    type: "back",
    className: _TemplateModule["default"].Icon
  })));
};

function Template(props) {
  if (!props.info.templateId) return null;
  var displayInfo = (0, _react.useMemo)(function () {
    var result = (0, _extends2["default"])({}, props.info);
    result.data = {};
    var rawData = props.info.data;
    var excludeKey = [];
    Object.keys(rawData).forEach(function (key) {
      if (excludeKey.indexOf(key) >= 0) return;

      if (rawData[key].label.indexOf('{{') === 0) {
        var keyItem = rawData[key].label.split('.')[0].replace(/{|}/gi, '');
        excludeKey.push(keyItem);
        result.data[key] = {
          label: rawData[keyItem].value ? rawData[keyItem].value : rawData[keyItem].example,
          value: rawData[key].value,
          color: rawData[key].color,
          example: rawData[key].example
        };
        return;
      }

      result.data[key] = (0, _extends2["default"])({}, rawData[key]);
    });
    return result;
  }, [props.info]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _TemplateModule["default"].TemplateContainer + " " + props.className,
    style: (0, _extends2["default"])({}, props.style, {
      color: props.info.color
    })
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _TemplateModule["default"].TemplateContent
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _TemplateModule["default"].TemplateHeader
  }, /*#__PURE__*/_react["default"].createElement(Title, {
    title: props.info.title
  }), /*#__PURE__*/_react["default"].createElement(IconMore, null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: _TemplateModule["default"].TemplateMain
  }, /*#__PURE__*/_react["default"].createElement(ContentList, {
    info: displayInfo
  })), /*#__PURE__*/_react["default"].createElement(Footer, {
    visible: props.info.page !== '' || props.info.miniprogram.appid !== ''
  })));
}

var _default = Template;
exports["default"] = _default;