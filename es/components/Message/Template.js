import _extends from "@babel/runtime/helpers/extends";
import React, { useMemo } from 'react';
import Icon from '../Icon';
import styles from './Template.module.scss';

var Title = function Title(_ref) {
  var title = _ref.title;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.Title
  }, title);
};

var IconMore = function IconMore() {
  return /*#__PURE__*/React.createElement("span", {
    className: styles.IconMore
  }, "...");
};

var ContentList = function ContentList(_ref2) {
  var info = _ref2.info;
  var maxLabelLength = useMemo(function () {
    var result = '';
    Object.keys(info.data).forEach(function (key) {
      if (info.data[key].label.length > result.length) {
        result = info.data[key].label;
      }
    });
    return result.length * 14 + 16;
  }, [info]);
  return /*#__PURE__*/React.createElement("ul", {
    className: styles.ContentList
  }, Object.keys(info.data).map(function (key) {
    if (info.data[key].label === '') return null;
    return info.data[key].label === '首行' ? /*#__PURE__*/React.createElement("li", {
      key: key,
      className: styles.ContentItemFirst
    }, info.data[key].value ? info.data[key].value : info.data[key].example) : /*#__PURE__*/React.createElement("li", {
      key: key,
      className: styles.ContentItem
    }, /*#__PURE__*/React.createElement("div", {
      className: styles.Key,
      style: {
        width: maxLabelLength + "px"
      }
    }, info.data[key].label, ":"), /*#__PURE__*/React.createElement("div", {
      className: styles.Value,
      style: {
        color: "" + info.data[key].color
      }
    }, info.data[key].value ? info.data[key].value : info.data[key].example));
  }));
};

var Footer = function Footer(_ref3) {
  var _ref3$visible = _ref3.visible,
      visible = _ref3$visible === void 0 ? true : _ref3$visible;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.Footer,
    style: {
      display: visible ? 'block' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.FooterContent
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.Text
  }, "\u67E5\u770B\u8BE6\u60C5"), /*#__PURE__*/React.createElement(Icon, {
    type: "back",
    className: styles.Icon
  })));
};

function Template(props) {
  if (!props.info.templateId) return null;
  var displayInfo = useMemo(function () {
    var result = _extends({}, props.info);

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

      result.data[key] = _extends({}, rawData[key]);
    });
    return result;
  }, [props.info]);
  return /*#__PURE__*/React.createElement("div", {
    className: styles.TemplateContainer + " " + props.className,
    style: _extends({}, props.style, {
      color: props.info.color
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.TemplateContent
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.TemplateHeader
  }, /*#__PURE__*/React.createElement(Title, {
    title: props.info.title
  }), /*#__PURE__*/React.createElement(IconMore, null)), /*#__PURE__*/React.createElement("div", {
    className: styles.TemplateMain
  }, /*#__PURE__*/React.createElement(ContentList, {
    info: displayInfo
  })), /*#__PURE__*/React.createElement(Footer, {
    visible: props.info.page !== '' || props.info.miniprogram.appid !== ''
  })));
}

export default Template;