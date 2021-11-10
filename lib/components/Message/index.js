"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _Text = _interopRequireDefault(require("./Text"));

var _MpNews = _interopRequireDefault(require("./MpNews"));

var _Mini = _interopRequireDefault(require("./Mini"));

var _Pic = _interopRequireDefault(require("./Pic"));

var _News = _interopRequireDefault(require("./News"));

var _Common = _interopRequireDefault(require("./Common"));

var _Subscribe = _interopRequireDefault(require("./Subscribe"));

var _Template = _interopRequireDefault(require("./Template"));

var _Dispatcher = _interopRequireDefault(require("./Dispatcher"));

var _default = {
  Pic: _Pic["default"],
  Mini: _Mini["default"],
  Text: _Text["default"],
  News: _News["default"],
  Subscribe: _Subscribe["default"],
  Template: _Template["default"],
  MpNews: _MpNews["default"],
  Wrapper: _Common["default"],
  Dispatcher: _Dispatcher["default"]
};
exports["default"] = _default;