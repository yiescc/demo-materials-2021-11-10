"use strict";

exports.__esModule = true;
exports["default"] = _default;

function _default(classObj) {
  var className = '';
  Object.keys(classObj).forEach(function (resKey) {
    if (classObj[resKey]) {
      className += resKey + " ";
    }
  });
  return className;
}