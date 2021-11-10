"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

require("./index.scss");

var minFontSize = 24; // const pxToRem = (px: number) => {
//   return Number((px / 75).toFixed(4));
// };

var _default = function _default(props) {
  var style = (0, _react.useMemo)(function () {
    var _props$unit = props.unit,
        unit = _props$unit === void 0 ? 'rpx' : _props$unit,
        _props$size = props.size,
        size = _props$size === void 0 ? minFontSize : _props$size,
        _props$customSize = props.customSize,
        customSize = _props$customSize === void 0 ? false : _props$customSize,
        color = props.color;
    var result = {};

    if (color) {
      result.color = color;
    }

    if (!customSize) {
      var width = size * 1.5;
      var fontSize = size;
      result.width = "" + width + unit;
      result.height = "" + width + unit;
      result.fontSize = "" + fontSize + unit;
    }

    return (0, _extends2["default"])({}, result, props.style);
  }, [props]);
  return /*#__PURE__*/React.createElement("i", {
    className: "cool-icon cool-icon-font-" + props.type + " " + props.className,
    style: style
  });
};

exports["default"] = _default;