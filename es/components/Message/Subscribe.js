import _extends from "@babel/runtime/helpers/extends";
import React, { useMemo } from 'react';
import Icon from '../Icon';
import styles from './Subscribe.module.scss';

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
  var info = _ref2.info,
      keyList = _ref2.keyList;
  return /*#__PURE__*/React.createElement("ul", {
    className: styles.ContentList
  }, keyList.map(function (item) {
    var _info$data$item$value;

    return /*#__PURE__*/React.createElement("li", {
      key: item.key,
      className: styles.ContentItem
    }, /*#__PURE__*/React.createElement("div", {
      className: styles.Key
    }, item.key), /*#__PURE__*/React.createElement("div", {
      className: styles.Value
    }, (_info$data$item$value = info.data[item.value]) !== null && _info$data$item$value !== void 0 ? _info$data$item$value : item.example));
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

var OfficialSubscribe = function OfficialSubscribe(_ref4) {
  var info = _ref4.info,
      style = _ref4.style,
      className = _ref4.className,
      keyList = _ref4.keyList,
      officialAvatar = _ref4.officialAvatar,
      officialNickname = _ref4.officialNickname;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.OfficialSubscribe + " " + className + " ",
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.OfficialSubscribeContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.OfficialSubscribeHeader
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.Left
  }, /*#__PURE__*/React.createElement("img", {
    referrerPolicy: "no-referrer",
    className: styles.OfficialAvatar,
    src: officialAvatar
  }), /*#__PURE__*/React.createElement("span", {
    className: styles.OfficialNickname
  }, officialNickname)), /*#__PURE__*/React.createElement("div", {
    className: styles.Right
  }, /*#__PURE__*/React.createElement(IconMore, null))), /*#__PURE__*/React.createElement("div", {
    className: styles.OfficialSubscribeMain
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '16px 0 18px'
    }
  }, /*#__PURE__*/React.createElement(Title, {
    title: info.title
  })), /*#__PURE__*/React.createElement(ContentList, {
    keyList: keyList,
    info: info
  })), /*#__PURE__*/React.createElement(Footer, {
    visible: info.page !== '' || info.miniprogram.appid !== ''
  })));
};

var ServiceSubscribe = function ServiceSubscribe(_ref5) {
  var info = _ref5.info,
      style = _ref5.style,
      className = _ref5.className,
      keyList = _ref5.keyList;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.ServiceSubscribe + " " + className,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.ServiceSubscribeContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.ServiceSubscribeHeader
  }, /*#__PURE__*/React.createElement(Title, {
    title: info.title
  }), /*#__PURE__*/React.createElement(IconMore, null)), /*#__PURE__*/React.createElement("div", {
    className: styles.ServiceSubscribeMain
  }, /*#__PURE__*/React.createElement(ContentList, {
    keyList: keyList,
    info: info
  })), /*#__PURE__*/React.createElement(Footer, {
    visible: info.page !== '' || info.miniprogram.appid !== ''
  })));
};

function Subscribe(props) {
  var exampleValueList = useMemo(function () {
    return props.info.example.split('\n').map(function (item) {
      return item.split(':')[1];
    });
  }, [props.info.example]);
  var keyList = useMemo(function () {
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, props.type === 'service' ? /*#__PURE__*/React.createElement(OfficialSubscribe, _extends({}, props, {
    keyList: keyList
  })) : /*#__PURE__*/React.createElement(ServiceSubscribe, _extends({}, props, {
    keyList: keyList
  })));
}

export default Subscribe;