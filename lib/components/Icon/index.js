"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

require("./index.scss");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
  return /*#__PURE__*/_react["default"].createElement("i", {
    className: "cool-icon cool-icon-font-" + props.type + " " + props.className,
    style: style
  });
};

exports["default"] = _default;