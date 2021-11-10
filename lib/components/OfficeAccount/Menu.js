"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./menu.scss");

var _store = require("./store");

var _Icon = _interopRequireDefault(require("../Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import { IMenuItem } from '../../typings/menu';
var BtnKeyboard = function BtnKeyboard() {
  return /*#__PURE__*/_react["default"].createElement("button", {
    className: "wechat-office-account-menu-keyboard clear_button_style"
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    type: "switch-keyboard",
    size: 12,
    unit: "px",
    className: "wechat-office-account-menu-keyboard-icon",
    color: "#000"
  }));
};

var BtnAddSecondaryMenu = function BtnAddSecondaryMenu(_ref) {
  var parentIdx = _ref.parentIdx;

  var _useContext = (0, _react.useContext)(_store.storeDispatcherCtx),
      addSecondaryMenu = _useContext.addSecondaryMenu;

  return /*#__PURE__*/_react["default"].createElement("li", {
    className: "wechat-office-account-secondary-menu-item clear_li_style",
    onClick: function onClick() {
      addSecondaryMenu === null || addSecondaryMenu === void 0 ? void 0 : addSecondaryMenu(parentIdx);
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "wechat-office-account-secondary-menu-item-text"
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    type: "plus",
    className: "wechat-office-account-secondary-menu-item-icon-add",
    unit: "px",
    color: "#000",
    size: 12
  })));
};

var SecondaryMenu = function SecondaryMenu(_ref2) {
  var list = _ref2.list,
      parentIdx = _ref2.parentIdx;

  var _useContext2 = (0, _react.useContext)(_store.storeDispatcherCtx),
      chooseSecondaryMenu = _useContext2.chooseSecondaryMenu;

  var _useContext3 = (0, _react.useContext)(_store.storeStateCtx),
      currentSecondaryMenuIdx = _useContext3.currentSecondaryMenuIdx;

  return /*#__PURE__*/_react["default"].createElement("ol", {
    className: "wechat-office-account-secondary-menu clear_ul_style"
  }, list.map(function (item, itemIdx) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      className: "wechat-office-account-secondary-menu-item " + (currentSecondaryMenuIdx === itemIdx ? 'wechat-office-account-secondary-menu-item-current' : '') + " clear_li_style",
      key: item.name,
      onClick: function onClick() {
        chooseSecondaryMenu === null || chooseSecondaryMenu === void 0 ? void 0 : chooseSecondaryMenu(itemIdx);
      }
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "wechat-office-account-secondary-menu-item-text"
    }, item.name), /*#__PURE__*/_react["default"].createElement("span", {
      className: "wechat-office-account-secondary-menu-item-split"
    }));
  }), list.length < 5 && /*#__PURE__*/_react["default"].createElement(BtnAddSecondaryMenu, {
    parentIdx: parentIdx
  }));
};

var MenuItem = function MenuItem(_ref3) {
  var _item$sub_button, _item$sub_button2;

  var item = _ref3.item,
      itemIdx = _ref3.itemIdx;

  var _useContext4 = (0, _react.useContext)(_store.storeStateCtx),
      currentMenuIdx = _useContext4.currentMenuIdx,
      currentSecondaryMenuIdx = _useContext4.currentSecondaryMenuIdx;

  var _useContext5 = (0, _react.useContext)(_store.storeDispatcherCtx),
      chooseMenu = _useContext5.chooseMenu;

  return /*#__PURE__*/_react["default"].createElement("li", {
    className: "wechat-office-account-menu-item " + (currentMenuIdx === itemIdx ? 'wechat-office-account-menu-item-current' : '') + " " + (currentMenuIdx === itemIdx && currentSecondaryMenuIdx !== undefined && currentSecondaryMenuIdx > -1 ? 'wechat-office-account-menu-item-has-child-current' : '') + " clear_li_style",
    key: item.name
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "wechat-office-account-menu-item-split"
  }), /*#__PURE__*/_react["default"].createElement("p", {
    className: "wechat-office-account-menu-item-content",
    onClick: function onClick() {
      chooseMenu === null || chooseMenu === void 0 ? void 0 : chooseMenu(itemIdx);
    }
  }, (_item$sub_button = item.sub_button) !== null && _item$sub_button !== void 0 && _item$sub_button.length ? /*#__PURE__*/_react["default"].createElement("span", {
    className: "wechat-office-account-menu-item-icon-more"
  }) : null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "wechat-office-account-menu-item-text"
  }, item.name)), currentMenuIdx === itemIdx && /*#__PURE__*/_react["default"].createElement(SecondaryMenu, {
    list: (_item$sub_button2 = item.sub_button) !== null && _item$sub_button2 !== void 0 ? _item$sub_button2 : [],
    parentIdx: itemIdx
  }));
};

var BtnAddMenu = function BtnAddMenu(_ref4) {
  var onClick = _ref4.onClick;
  return /*#__PURE__*/_react["default"].createElement("li", {
    className: "wechat-office-account-menu-item clear_li_style",
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "wechat-office-account-menu-item-split"
  }), /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    type: "plus",
    className: "wechat-office-account-menu-btn-add-icon",
    unit: "px",
    color: "#000",
    size: 16
  }));
};

var _default = function _default() {
  var _useContext6 = (0, _react.useContext)(_store.storeStateCtx),
      menu = _useContext6.menu;

  var _useContext7 = (0, _react.useContext)(_store.storeDispatcherCtx),
      addMenu = _useContext7.addMenu;

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "wechat-office-account-menu"
  }, /*#__PURE__*/_react["default"].createElement(BtnKeyboard, null), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "wechat-office-account-menu-list clear_ul_style"
  }, menu.map(function (item, itemIdx) {
    return /*#__PURE__*/_react["default"].createElement(MenuItem, {
      item: item,
      itemIdx: itemIdx,
      key: item.name
    });
  }), menu.length < 3 && /*#__PURE__*/_react["default"].createElement(BtnAddMenu, {
    onClick: function onClick() {
      addMenu === null || addMenu === void 0 ? void 0 : addMenu();
    }
  })));
};

exports["default"] = _default;