"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _NewsModule = _interopRequireDefault(require("./News.module.scss"));

var DEFAULT_PIC = // eslint-disable-next-line max-len
'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDciIGhlaWdodD0iNDciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjRjJGMkYyIiBkPSJNMCAwaDQ3djQ3SDB6Ii8+PHBhdGggZD0iTTE3LjcyMSAzNWMtMS4yMyAwLTIuNDEtLjQ2LTMuMzQ0LTEuNDMzLS44ODUtLjkyLTEuMzc3LTIuMTQ4LTEuMzc3LTMuNDc5IDAtMS4zMy40OTItMi41NTggMS4zNzctMy40NzlsMi4zMTItMi40MDRjLjI0NS0uMjU2LjU5LS4yNTYuODM2IDBhLjYwNS42MDUgMCAwMTAgLjg3bC0yLjMxMiAyLjQwNGEzLjcxMiAzLjcxMiAwIDAwLTEuMDMzIDIuNjFjMCAuOTcxLjM5NCAxLjk0NCAxLjAzMyAyLjYwOSAxLjM3NyAxLjQzMiAzLjY0IDEuNDMyIDUuMDY2IDBsNC41MjQtNC43MDdjMS4zNzctMS40MzMgMS4zNzctMy43ODYgMC01LjI3bC44MzYtLjg3YzEuODcgMS45NDQgMS44NyA1LjA2NSAwIDcuMDFsLTQuNTI0IDQuNzA2QTQuNjY0IDQuNjY0IDAgMDExNy43MiAzNXptNC4xMzEtOC42OThhLjQ0Mi40NDIgMCAwMS0uMzkzLS4yMDRjLTEuODY5LTEuOTQ1LTEuODY5LTUuMDY1IDAtNy4wMWw0LjQ3NS00LjY1NUE0LjU5MyA0LjU5MyAwIDAxMjkuMjggMTNjMS4yNzggMCAyLjQ1OS41MTIgMy4zNDQgMS40MzMuODg1LjkyIDEuMzc3IDIuMTQ4IDEuMzc3IDMuNDc5IDAgMS4zMy0uNDkyIDIuNTU4LTEuMzc3IDMuNDc5bC0yLjMxMiAyLjQwNGMtLjI0NS4yNTYtLjU5LjI1Ni0uODM2IDBhLjYwNS42MDUgMCAwMTAtLjg3bDIuMzEyLTIuNDA0YTMuNzEyIDMuNzEyIDAgMDAxLjAzMy0yLjYxYzAtLjk3MS0uMzQ1LTEuODkyLTEuMDMzLTIuNjA5YTMuNDI3IDMuNDI3IDAgMDAtMi41MDgtMS4wNzRjLS45MzUgMC0xLjg3LjQxLTIuNTA4IDEuMDc0bC00LjUyNSA0LjcwN2MtMS4zNzcgMS40MzMtMS4zNzcgMy43ODYgMCA1LjI3YS42MDUuNjA1IDAgMDEwIC44Ny41NDYuNTQ2IDAgMDEtLjM5NC4xNTN6IiBmaWxsPSIjNzg3ODc4IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L2c+PC9zdmc+';

var _default = function _default(_ref) {
  var info = _ref.info;
  return /*#__PURE__*/_react["default"].createElement("a", {
    href: info.url,
    className: _NewsModule["default"].News
  }, info.title && /*#__PURE__*/_react["default"].createElement("b", {
    className: _NewsModule["default"].Title
  }, info.title), /*#__PURE__*/_react["default"].createElement("div", {
    className: _NewsModule["default"].Info
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: _NewsModule["default"].Desc
  }, info.description), /*#__PURE__*/_react["default"].createElement("i", {
    className: _NewsModule["default"].Pic,
    style: {
      backgroundImage: "url(" + (info.picUrl || DEFAULT_PIC) + ")"
    }
  })));
};

exports["default"] = _default;