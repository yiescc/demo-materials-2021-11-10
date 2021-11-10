import _extends from "@babel/runtime/helpers/extends";
import React, { useMemo } from 'react';
import './index.scss';
var minFontSize = 24; // const pxToRem = (px: number) => {
//   return Number((px / 75).toFixed(4));
// };

export default (function (props) {
  var style = useMemo(function () {
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

    return _extends({}, result, props.style);
  }, [props]);
  return /*#__PURE__*/React.createElement("i", {
    className: "cool-icon cool-icon-font-" + props.type + " " + props.className,
    style: style
  });
});