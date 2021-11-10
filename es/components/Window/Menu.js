// @ts-ignore 仅作外部
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import {createElement} from 'react';
import { useMemo } from 'react';
import Icon from '../Icon';
import styles from './Menu.module.scss';

var BtnKeyboard = function BtnKeyboard() {
  return /*#__PURE__*/React.createElement("div", {
    className: "" + styles.KeyboardIcon
  }, /*#__PURE__*/React.createElement(Icon, {
    type: "switch-keyboard",
    size: 25,
    unit: "px",
    style: {
      color: '#000'
    }
  }));
};

var BtnAddSecondaryMenu = function BtnAddSecondaryMenu(_ref) {
  var parentIdx = _ref.parentIdx,
      addSecondaryMenu = _ref.addSecondaryMenu;
  return /*#__PURE__*/React.createElement("li", {
    className: styles.SecondaryItem,
    onClick: function onClick() {
      addSecondaryMenu === null || addSecondaryMenu === void 0 ? void 0 : addSecondaryMenu(parentIdx);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: styles.SecondaryItemText
  }, /*#__PURE__*/React.createElement(Icon, {
    type: "plus",
    size: 12,
    style: {
      color: '#000'
    }
  })));
};

var SecondaryMenu = function SecondaryMenu(_ref2) {
  var list = _ref2.list,
      parentIdx = _ref2.parentIdx,
      currentMenuIdx = _ref2.currentMenuIdx,
      currentSecondaryMenuIdx = _ref2.currentSecondaryMenuIdx,
      chooseSecondaryMenu = _ref2.chooseSecondaryMenu,
      addSecondaryMenu = _ref2.addSecondaryMenu;
  // const ref = useRef<HTMLSpanElement>();
  // useClickAway(() => {
  //   setCounter((s) => s + 1);
  // }, ref);
  var menuNameList = useMemo(function () {
    return list.map(function (item) {
      if (item.name.length > 12) {
        var before = item.name.slice(0, 7);
        var after = item.name.slice(item.name.length - 5);
        return before + "\u2026" + after;
      }

      return item.name;
    });
  }, [list]);
  return /*#__PURE__*/React.createElement("ol", {
    className: styles.SecondaryMenu
  }, list.map(function (item, itemIdx) {
    return /*#__PURE__*/React.createElement("li", {
      className: styles.SecondaryItem + " " + (currentSecondaryMenuIdx === itemIdx && parentIdx === currentMenuIdx ? styles.SecondaryItemCurrent : '') + " clear_li_style" // eslint-disable-next-line react/no-array-index-key
      ,
      key: itemIdx,
      onClick: function onClick() {
        chooseSecondaryMenu === null || chooseSecondaryMenu === void 0 ? void 0 : chooseSecondaryMenu(parentIdx, itemIdx);
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: styles.SecondaryItemText
    }, menuNameList[itemIdx]), /*#__PURE__*/React.createElement("span", {
      className: styles.SecondaryItemSplit
    }));
  }), list.length < 5 && /*#__PURE__*/React.createElement(BtnAddSecondaryMenu, {
    parentIdx: parentIdx,
    addSecondaryMenu: addSecondaryMenu
  }));
};

var MenuItem = function MenuItem(_ref3) {
  var _subButton;

  var item = _ref3.item,
      itemIdx = _ref3.itemIdx,
      menuExpanded = _ref3.menuExpanded,
      currentMenuIdx = _ref3.currentMenuIdx,
      currentSecondaryMenuIdx = _ref3.currentSecondaryMenuIdx,
      chooseSecondaryMenu = _ref3.chooseSecondaryMenu,
      chooseMenu = _ref3.chooseMenu,
      addSecondaryMenu = _ref3.addSecondaryMenu;
  // @ts-ignore 忽略subButton类型，有可能后端会传null
  var hasSubButton = Object.hasOwnProperty.call(item, 'subButton') && item.subButton;
  var menuName = useMemo(function () {
    if (item.name.length > 7) {
      var before = item.name.slice(0, 4);
      var after = item.name.slice(item.name.length - 3);
      return before + "\u2026" + after;
    }

    return item.name;
  }, [item.name]);
  return /*#__PURE__*/React.createElement("li", {
    className: styles.Item + " " + (currentMenuIdx === itemIdx ? styles.ItemCurrent : '') + " " + (currentMenuIdx === itemIdx && hasSubButton && currentSecondaryMenuIdx > -1 ? styles.ItemCurrentFold : '') // eslint-disable-next-line react/no-array-index-key
    ,
    key: itemIdx
  }, /*#__PURE__*/React.createElement("span", {
    className: styles.ItemSplit
  }), /*#__PURE__*/React.createElement("p", {
    className: styles.ItemContent,
    onClick: function onClick() {
      chooseMenu === null || chooseMenu === void 0 ? void 0 : chooseMenu(itemIdx);
    }
  }, hasSubButton && item.subButton.length > 0 ? /*#__PURE__*/React.createElement("span", {
    className: styles.ItemIconMore
  }) : null, /*#__PURE__*/React.createElement("span", {
    className: styles.ItemText
  }, menuName)), (menuExpanded || !menuExpanded && currentMenuIdx === itemIdx) && /*#__PURE__*/React.createElement(SecondaryMenu // @ts-ignore 类型是正确的
  , {
    list: (_subButton = item.subButton) !== null && _subButton !== void 0 ? _subButton : [],
    parentIdx: itemIdx,
    currentMenuIdx: currentMenuIdx,
    currentSecondaryMenuIdx: currentSecondaryMenuIdx,
    chooseSecondaryMenu: chooseSecondaryMenu,
    addSecondaryMenu: addSecondaryMenu
  }));
};

var BtnAddMenu = function BtnAddMenu(_ref4) {
  var onClick = _ref4.onClick;
  return /*#__PURE__*/React.createElement("li", {
    className: styles.Item,
    onClick: onClick
  }, /*#__PURE__*/React.createElement("span", {
    className: styles.ItemSplit
  }), /*#__PURE__*/React.createElement(Icon, {
    type: "plus",
    className: styles.MenuAddIcon,
    size: 16,
    style: {
      color: '#000'
    }
  }));
};

export default (function (_ref5) {
  var _ref5$menu = _ref5.menu,
      menu = _ref5$menu === void 0 ? [] : _ref5$menu,
      _ref5$menuExpanded = _ref5.menuExpanded,
      menuExpanded = _ref5$menuExpanded === void 0 ? false : _ref5$menuExpanded,
      _ref5$currentMenuIdx = _ref5.currentMenuIdx,
      currentMenuIdx = _ref5$currentMenuIdx === void 0 ? -1 : _ref5$currentMenuIdx,
      _ref5$currentSecondar = _ref5.currentSecondaryMenuIdx,
      currentSecondaryMenuIdx = _ref5$currentSecondar === void 0 ? -1 : _ref5$currentSecondar,
      hideKeyboardSwitch = _ref5.hideKeyboardSwitch,
      addMenu = _ref5.addMenu,
      chooseMenu = _ref5.chooseMenu,
      chooseSecondaryMenu = _ref5.chooseSecondaryMenu,
      addSecondaryMenu = _ref5.addSecondaryMenu;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.Menu
  }, !hideKeyboardSwitch && /*#__PURE__*/React.createElement(BtnKeyboard, null), /*#__PURE__*/React.createElement("ul", {
    className: styles.MenuList
  }, menu.map(function (item, itemIdx) {
    return /*#__PURE__*/React.createElement(MenuItem, {
      item: item,
      itemIdx: itemIdx // eslint-disable-next-line react/no-array-index-key
      ,
      key: itemIdx,
      menuExpanded: menuExpanded,
      currentMenuIdx: currentMenuIdx,
      currentSecondaryMenuIdx: currentSecondaryMenuIdx,
      chooseMenu: chooseMenu,
      chooseSecondaryMenu: chooseSecondaryMenu,
      addSecondaryMenu: addSecondaryMenu
    });
  }), menu.length < 3 && /*#__PURE__*/React.createElement(BtnAddMenu, {
    onClick: addMenu
  })));
});